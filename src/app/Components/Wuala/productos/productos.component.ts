import { Component, OnInit } from '@angular/core';
import { Carrito } from 'app/Model/Carrito';
import { Producto } from 'app/Model/Producto';
import { CarritoDetalleService } from 'app/Services/carrito-detalle.service';
import { ProductoService } from 'app/Services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  product : Producto[] = [];
  constructor(private servp:ProductoService,
    private servcd:CarritoDetalleService) { }

  ngOnInit(): void {
    this.servp.get2().subscribe(
      data=>{
        this.product = data;
      })
  }

  agregar(prod:Producto){
    const cartItem = new Carrito(prod);
    this.servcd.addtoCart(cartItem)
  }

}
