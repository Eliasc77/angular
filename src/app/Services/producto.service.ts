import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url="http://localhost:9898/rest_prod";
  constructor(private http:HttpClient) { }


  get2():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }
  getid(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.url+ '/'+id)
  }

  save(prod:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, prod)
  }

  update(prod:Producto){
    return this.http.put<Producto>(this.url+"/"+prod.cod_prod,prod);
  }

  delete(user:Producto){
    return this.http.delete<Producto>(this.url+"/"+user.cod_prod)
  }
}
