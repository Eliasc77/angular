import { Component, OnInit } from '@angular/core';
import { CarritoDetalleService } from 'app/Services/carrito-detalle.service';

@Component({
  selector: 'app-shop-status',
  templateUrl: './shop-status.component.html',
  styleUrls: ['./shop-status.component.css']
})
export class ShopStatusComponent implements OnInit {
  totalPrice: number=0;
  totalQuantity : number=0;
  constructor(private _cart:CarritoDetalleService) { }

  ngOnInit(): void {
    this.updateCarritoEstado();

  }

  updateCarritoEstado(){
    this._cart.totalPrice.subscribe(
      data=>this.totalPrice=data
    )

    this._cart.totalQuantity.subscribe(
      data=>this.totalQuantity=data
    )
}
}

