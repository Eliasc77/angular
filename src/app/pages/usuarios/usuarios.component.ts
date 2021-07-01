import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCl } from 'app/Model/UserCl';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'

})
export class UsuariosComponent implements OnInit {
  usuario: UserCl[] =[];
  constructor(private service : UserService,
    private route:Router) { }

  ngOnInit(): void {
    this.service.get().subscribe(data=>{
      this.usuario=data;
    })
  }


  edit(usu:UserCl){
    localStorage.setItem("id", usu.id.toString());
    this.route.navigate(["admin/admin/editusuario"])
  }

  delete(usu:UserCl){
    this.service.delete(usu).subscribe(data=>{
      this.usuario=this.usuario.filter(c=>c !==usu);
    })
  }
}
