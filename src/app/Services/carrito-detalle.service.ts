import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Carrito } from '../Model/Carrito';
import { Producto } from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoDetalleService {


  carrito : Carrito[] = [];
  totalPrice : Subject<number> = new Subject<number>();
  totalQuantity: Subject<number>=new Subject<number>();
  constructor() { }

  addtoCart(cartItem: Carrito){
    let alrdyexistInCart : boolean = false;
    let existingCartItem: Carrito = undefined;

    if(this.carrito.length>0){

    existingCartItem = this.carrito.find( tempCart => tempCart.idProducto === cartItem.idProducto);

    alrdyexistInCart = (existingCartItem != undefined)
    }
    if(alrdyexistInCart){
    existingCartItem.cantidad++;
    }else{
      this.carrito.push(cartItem);
    }
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let totalPriceValue : number = 0;
    let totalQuantityValue : number = 0;

    for(let currentCartItem of this.carrito){
      totalPriceValue += currentCartItem.cantidad * currentCartItem.precioUnit;
      totalQuantityValue += currentCartItem.cantidad;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(carItem : Carrito){
    carItem.cantidad--;
    if(carItem.cantidad ===0){
      this.remove(carItem);
    }else{
      this.calculateTotalPrice();
    }
  }

  remove(carItem : Carrito){
    const itemIndex = this.carrito.findIndex
                      (tempcarItem => tempcarItem.idProducto === carItem.idProducto);

    if( itemIndex > -1){
      this.carrito.splice(itemIndex,1);
      this.calculateTotalPrice();
    }
  }
}
