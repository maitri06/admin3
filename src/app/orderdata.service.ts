import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { order } from "./order/ordermodel";

@Injectable()
export class OrderdataService {
  public url:string="http://localhost:3000/order";

  constructor(public _http:HttpClient) { }
getAllOrder(){
  return this._http.get<order>(this.url);
}
}
