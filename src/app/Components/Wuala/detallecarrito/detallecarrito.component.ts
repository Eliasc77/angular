import { Component, OnInit } from '@angular/core';
import { Carrito } from 'app/Model/Carrito';
import { CarritoDetalleService } from 'app/Services/carrito-detalle.service';

@Component({
  selector: 'app-detallecarrito',
  templateUrl: './detallecarrito.component.html',
  styleUrls: ['./detallecarrito.component.css']
})
export class DetallecarritoComponent implements OnInit {
  carritoItem : Carrito[] = [];
  totalPrice: number=0;
  totalQuantity : number =0;
  constructor(private service:CarritoDetalleService) { }

  ngOnInit(): void {
    this.cartDetails();
  }
  cartDetails(){
    this.carritoItem = this.service.carrito;
    this.service.totalPrice.subscribe(
      data=> this.totalPrice=data
    );
    this.service.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    );
    this.service.calculateTotalPrice();
  }

  incrementQuantity(carritoItem : Carrito){
    this.service.addtoCart(carritoItem);
  }

  decrementQuantity(carritoItem:Carrito){
    this.service.decrementQuantity(carritoItem);
  }

  remove(carritoItem:Carrito){
    this.service.remove(carritoItem);
  }
}
