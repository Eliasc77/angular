import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'app/Model/Producto';
import { ProductoService } from 'app/Services/producto.service';

@Component({
  selector: 'app-saveprod',
  templateUrl: './saveprod.component.html'
})
export class SaveprodComponent implements OnInit {
  prod: Producto = new Producto();
  constructor( private service: ProductoService, private router:Router) { }

  ngOnInit(): void {
  }

  guardar(){
    this.service.save(this.prod).subscribe(
      data=>{
        alert("se agrego con exito!");
        this.router.navigate(["admin/admin/product"]);
      })
  }
}
