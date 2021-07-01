import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'app/Model/Producto';
import { ProductoService } from 'app/Services/producto.service';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html'
})
export class EditprodComponent implements OnInit {

  prod:Producto = new Producto();
  constructor(private service:ProductoService,
              private route:Router ) { }

  ngOnInit(): void {
    this.edit();
  }


  edit(){
    let id:any = localStorage.getItem("id");
    this.service.getid(id).subscribe(data=>{
      this.prod=data;
    })
  }

  update(prod:Producto){
    this.service.update(prod).subscribe(data=>{
      this.prod=data;
      alert("se actualizo correcto");
      this.route.navigate(["admin/admin/product"])
    })
  }
}
