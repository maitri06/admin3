import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from './product/productmodel';
@Injectable()
export class ProductdataService {
  public url: string = "http://localhost:3000/product/";
  public url1: string = "http://localhost:3000/prod_cat/";
  urldel:string="http://localhost:3000/delallpro/";
  constructor(public _http: HttpClient) { }
  getAllProduct() {
    return this._http.get<product>(this.url);
  }
  deleteProduct(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  addMen(products: product) {
    let body = JSON.stringify(products);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  editProduct(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  getProductById(id) {

    return this._http.get<product[]>(this.url + id);
  }

  getProductAndCat() {
    return this._http.get(this.url1);
  }

  delAllProd(prod:product[])
  {
    console.log(prod);
    let body=JSON.stringify(prod);
    return this._http.post(this.urldel,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  
  }
}
