import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { category } from "./category/categorymodel";


@Injectable()
export class CatdataService {

  public url: string = "http://localhost:3000/category/";
 

  constructor(public _http: HttpClient) { }
  getAllCategory() {
    return this._http.get<category>(this.url);
  }
  deleteCategory(id:string){
    return this._http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  addCategory(cat:category){
    let body=JSON.stringify(cat);
    return this._http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
} 
