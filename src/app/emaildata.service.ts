import { Injectable } from '@angular/core';
import { Forget } from './forget/forgetmodel';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EmaildataService {
  url:string="http://localhost:3000/email/";
  content: string = "Content-Type";
header: string = "application/json";

  constructor(public _http:HttpClient) { }
  sendMail(item:Forget){
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set(this.content, this.header) });
  }
  

}

