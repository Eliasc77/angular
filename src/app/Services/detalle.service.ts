import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from 'app/Model/Carrito';
import { Detalle } from 'app/Model/Detalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  url="http://localhost:9898/rest_det"
  constructor(private http:HttpClient) { }

  grabar(detalle: Detalle):Observable<Detalle>{
    return this.http.post<Detalle>(this.url, detalle)
  }

  get2():Observable<Detalle[]>{
    return this.http.get<Detalle[]>(this.url);
  }



}
