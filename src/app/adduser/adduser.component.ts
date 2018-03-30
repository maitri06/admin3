import { Component, OnInit } from '@angular/core';
import {user } from "../user/usermodel";
import { UserdataService } from "../userdata.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(public _data:UserdataService,public _router:Router) { }
email:string="";
password:string="";
name:string="";
gender:string="";
image:string="";
mob:string="";
address:string="";
public user:user[]=[];
 
  ngOnInit() {
  }
  signUp()
  {
    let item=new user(this.email,this.password,this.name,this.gender,this.image,this.mob,this.address,'user');
    this._data.addUser(item).subscribe(
      (data:any)=>{
        console.log(data);
        this._router.navigate(['/user']);
      }
    )
  }

}
