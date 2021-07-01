import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCl } from 'app/Model/UserCl';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-saveusers',
  templateUrl: './saveusers.component.html'
})
export class SaveusersComponent implements OnInit {

  usu:UserCl = new UserCl();
  constructor(private service:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.grabar(this.usu).subscribe(data=>{

    alert("se agrego con exito!")
    this.router.navigate(["admin/admin/user"]);
    })
    }

}
