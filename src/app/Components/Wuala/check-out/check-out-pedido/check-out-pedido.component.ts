import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from 'app/Model/Carrito';
import { Detalle } from 'app/Model/Detalle';
import { Pedido } from 'app/Model/Pedido';
import { UserCl } from 'app/Model/UserCl';
import { CarritoDetalleService } from 'app/Services/carrito-detalle.service';
import { DetalleService } from 'app/Services/detalle.service';
import { PedidosService } from 'app/Services/pedidos.service';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-check-out-pedido',
  templateUrl: './check-out-pedido.component.html',
  styleUrls: ['./check-out-pedido.component.css']
})
export class CheckOutPedidoComponent implements OnInit {

  anio:string;
  carritoItem : Carrito[] = [];
  totalPrice: number=0;
  totalQuantity : number =0;

   seleccion:string;

  //obtener ususario
  usuarioarrdni:UserCl[] = [];


  pedido:Pedido = new Pedido();
  ordenpedido:Pedido[] = [];
  det:Detalle= new Detalle();
  constructor(private service:CarritoDetalleService,
              private serviceP:PedidosService,
              private serviceD:DetalleService,
              private serviceC:UserService,
              private route:Router) { }

  ngOnInit(): void {
    this.cartDetails();
    var f = new Date();
    this.anio = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    this.serviceC.get().subscribe(data=>{
      this.usuarioarrdni=data;
    });
    this.capturar();
  }

  guardar(){
    let lastidUsuario = this.usuarioarrdni[this.usuarioarrdni.length-1];
    this.pedido.id=lastidUsuario.id;
    this.pedido.fecha=this.anio;
    this.pedido.monto=this.totalPrice;
    this.pedido.cod_tipo_pago=this.seleccion;
    this.serviceP.grabar(this.pedido).subscribe(data=>{
    })
    console.log()
    this.route.navigate(['/menu/checkoutboleta']);
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
  capturar(){
    this.pedido.cod_tipo_pago= this.seleccion;
  }
}
