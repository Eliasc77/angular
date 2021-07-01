import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCl } from 'app/Model/UserCl';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html'

})
export class EditusersComponent implements OnInit {

  user: UserCl= new UserCl ();
  constructor(private service : UserService,
            private route:Router) { }

  ngOnInit(): void {
    this.edit();
  }

  edit(){
    let id:any = localStorage.getItem("id");
    this.service.getUserId(id).subscribe(data=>{
      this.user=data;
    })
  }

  update(user:UserCl){
    this.service.update(user).subscribe(data=>{
      this.user=data;
      alert("se actualizo correcto");
      this.route.navigate(["admin/admin/user"])
    })
  }
}
