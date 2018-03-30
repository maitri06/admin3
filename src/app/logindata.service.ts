import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { order } from "./order/l";
import { user } from "./user/usermodel";

@Injectable()
export class LogindataService {
  public url:string="http://localhost:3000/login/";
  public urlforget:string="http://localhost:3000/email/";
  public urluser:string="http://localhost:3000/user/";

  constructor(public _http:HttpClient) { }
  login(item){
    let body=JSON.stringify(item);
    return this._http.post(
      this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')}
    );
  }
  getAllUser(){
    return this._http.get<user>(this.urluser);
  }
  forget(item)
  {
    let body=JSON.stringify(item);
    
      return this._http.post(this.urlforget,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
 
}
