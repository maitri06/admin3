import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { feedback } from "./feedback/feedbackmodel";


@Injectable()
export class FeedbackdataService {
  public url:string="http://localhost:3000/feedback/";
  urldel:string="http://localhost:3000/delallfeedback/";
 
  constructor(public _http:HttpClient) { }
  getAllFeedback(){
    return this._http.get<feedback>(this.url);
  }
  deleteFeedback(id:string){
    return this._http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  } 
  getFeedbackById(id){

    return this._http.get<feedback[]>(this.url+id);
  } 
  delAllFeedback(users:feedback[])
  {
    console.log(users);
    let body=JSON.stringify(users);
    return this._http.post(this.urldel,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  
  }
  
}
