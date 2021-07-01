import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { UserCl } from 'app/Model/UserCl';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:9898/rest_user";

  constructor(private http:HttpClient) { }

  grabar(persona: UserCl):Observable<UserCl>{
    return this.http.post<UserCl>(this.url, persona)
  }

  get():Observable<UserCl[]>{
    return this.http.get<UserCl[]>(this.url);
  }

  getUserId(id:number){
    return this.http.get<UserCl>(this.url+'/'+id)
  }

  update(user:UserCl){
    return this.http.put<UserCl>(this.url+"/"+user.id,user);
  }

  delete(user:UserCl){
    return this.http.delete<UserCl>(this.url+"/"+user.id)
  }
}
