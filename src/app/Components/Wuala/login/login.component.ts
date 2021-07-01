import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCl } from 'app/Model/UserCl';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pers : UserCl  = new UserCl ();
  persona: UserCl[]=[];
  user:any;
  pass:any;
  op: number = 0;
  adm: any;
  constructor(private service:UserService,
                private route:Router) { }

  ngOnInit(): void {
    this.service.get().subscribe(data=>{
      this.persona=data;
    });
  }
  save(){
    this.service.grabar(this.pers).subscribe(data=>{

      alert("se agrego con exito!")
      this.route.navigate(['/menu/slider']);
      })
  }

  Iniciar(){
    for(let i of this.persona){
      if(i.correo == this.user && i.password == this.pass){
        this.op=1;
        this.adm=i.tipo_rol;
      }
    }
      if(this.op == 1){
        alert("Bienvenido!");
        if(this.adm=='ADMIN'){

          this.route.navigate(['/admin']);
        }
        else{
          this.route.navigate(['/menu/slider']);
          console.log(this.adm);
        }

      }else{
        alert("Usuario o Contraseña Incorrecta!");
      }


  }
}
