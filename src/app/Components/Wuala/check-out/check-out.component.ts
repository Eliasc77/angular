import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Carrito } from 'app/Model/Carrito';
import { Detalle } from 'app/Model/Detalle';
import { Pedido } from 'app/Model/Pedido';
import { UserCl } from 'app/Model/UserCl';
import { UsuariosComponent } from 'app/pages/usuarios/usuarios.component';
import { CarritoDetalleService } from 'app/Services/carrito-detalle.service';
import { DetalleService } from 'app/Services/detalle.service';
import { PedidosService } from 'app/Services/pedidos.service';
import { UserService } from 'app/Services/user.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  anio:string;

  carritoItem : Carrito[] = [];
  totalPrice: number=0;
  totalQuantity : number =0;

  usuarioarrdni:UserCl[] = [];
  usuario:UserCl = new UserCl();

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
    this.anio = new Date().getFullYear()+"";
    this.serviceC.get().subscribe(data=>{
      this.usuarioarrdni=data;
    })
    this.serviceP.get2().subscribe(data=>{
      this.ordenpedido=data;
    })

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



  guardar(){
    this.serviceC.grabar(this.usuario).subscribe(data=>{

    });
    this.route.navigate(['/menu/checkoutpedido']);

/*
    let lastidUsuario = this.usuarioarrdni[this.usuarioarrdni.length-1];
    this.pedido.id=lastidUsuario.id;
    this.pedido.fecha=this.anio;
    this.pedido.monto=this.totalPrice;

    this.serviceP.grabar(this.pedido).subscribe(data=>{

    }) */

  }

  guardarDetalle(){
    let lastItemPedido=this.ordenpedido[this.ordenpedido.length-1];

    for(let carr of this.carritoItem){
      this.det.cod_prod=carr.idProducto;
      this.det.precio=carr.cantidad*carr.precioUnit;
      this.det.cantidad=carr.cantidad;
      this.det.cod_pedido=lastItemPedido.cod_pedido;
      this.serviceD.grabar(this.det).subscribe(
        data=>{
      })

    }
    console.log(this.det.cod_pedido)
  }
}
