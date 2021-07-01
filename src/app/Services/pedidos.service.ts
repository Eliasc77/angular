import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from 'app/Model/Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {


  url ="http://localhost:9898/rest_orden"
  constructor(private http:HttpClient) { }

  get2():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

  grabar(pedido: Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url, pedido)
  }
  getid(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.url+ '/'+id)
  }
  update(ped:Pedido){
    return this.http.put<Pedido>(this.url+"/"+ped.cod_pedido,ped);
  }

  delete(ped:Pedido){
    return this.http.delete<Pedido>(this.url+"/"+ped.cod_pedido)
  }
}
