import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { user } from './../user/usermodel';
import {LogindataService  } from '../logindata.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Forget } from './forgetmodel';
import { UserdataService } from '../userdata.service';
import { EmaildataService } from '../emaildata.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  email:string="";
  msg:string="";
emailId:string='';
  constructor( public _router:Router, public data:LogindataService,public _data:UserdataService,public _email:EmaildataService) { }

  ngOnInit() {
  }
  onSend()
  {
  
    if(this.email=="")
    {
      this.msg="enter email please";
    }
    else
    {
      this._data.getUserById(this.email).subscribe(
        (data:user[])=>{
          if(data.length==1){
            var msg=data[0].u_name+" your pass is "+data[0].u_password;
            console.log(msg);
            this._email.sendMail(new Forget(msg,this.email,"Reseting EMail Password")).subscribe(
              (data:any)=>
              {
                console.log("msg sent");
                alert("msg sent");
              }
            );
          }
        }
      );
      
    }
  }

}



  
