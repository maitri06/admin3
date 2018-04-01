import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combo } from './combo/combomodel';

@Injectable()
export class CombodataService {
  public url: string = "http://localhost:3000/combo/";
  urldel:string="http://localhost:3000/delallcombo/";
  constructor(public _http: HttpClient) { }
  getAllCombo() {
    return this._http.get<combo>(this.url);
  }
  deleteCombo(id: number) {
    return this._http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  addCombo(combos: combo) {
    let body = JSON.stringify(combos);
    return this._http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  editCombo(id, item) {
    let body = JSON.stringify(item);
    return this._http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });

  }
  getComboById(id) {

    return this._http.get<combo[]>(this.url + id);
  }


  delAllCombo(prod:combo[])
  {
    console.log(prod);
    let body=JSON.stringify(prod);
    return this._http.post(this.urldel,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  
  }

}
