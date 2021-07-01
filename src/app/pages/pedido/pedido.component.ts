import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'app/Model/Pedido';
import { PedidosService } from 'app/Services/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  ped:Pedido[]=[];
  constructor(private pservice:PedidosService,
              private route:Router) { }

  ngOnInit(): void {
    this.pservice.get2().subscribe(data=>{
      this.ped=data;
    })
  }
  edit(pe:Pedido){
    localStorage.setItem("id", pe.cod_pedido.toString());
    this.route.navigate(["admin/admin/editprod"])

  }
  delete(pe:Pedido){
    this.pservice.delete(pe).subscribe(data=>{
      this.ped=this.ped.filter(c=>c !==pe);
    })
  }
}
