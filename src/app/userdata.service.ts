import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from './user/usermodel';
@Injectable()
export class UserdataService {
public url:string="http://localhost:3000/user/";
urldel:string="http://localhost:3000/delalluser/";
  constructor(public _http:HttpClient) { }
  getAllUsers(){
    return this._http.get<user>(this.url);
  }
  deleteUser(id:string){
    return this._http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  } 
  addUser(users:user){
    let body=JSON.stringify(users);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  editUser(id,item){
    let body = JSON.stringify(item);
    return this._http.put(this.url+id, body, { headers: new HttpHeaders().set('Content-Type','application/json') });
 
  }
  getUserById(id){

    return this._http.get<user[]>(this.url+id);
  } 
  delAllUser(users:user[])
  {
    console.log(users);
    let body=JSON.stringify(users);
    return this._http.post(this.urldel,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  
  }
  
}
