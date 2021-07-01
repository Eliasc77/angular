import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'app/Model/Producto';
import { ProductoService } from 'app/Services/producto.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'

})
export class ProductComponent implements OnInit {
  prod : Producto [] = [];
  constructor(private service : ProductoService,
    private route:Router) { }

  ngOnInit(): void {
    this.service.get2().subscribe(data=>{
      this.prod=data;
    })
  }
  edit(pro:Producto){
    localStorage.setItem("id", pro.cod_prod.toString());
    this.route.navigate(["admin/admin/editprod"])

  }
  delete(pro:Producto){
    this.service.delete(pro).subscribe(data=>{
      this.prod=this.prod.filter(c=>c !==pro);
    })
  }
}
