import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UserdataService } from '../userdata.service';
import { user } from "../user/usermodel";

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
public _subscription:Subscription;
email:string="";
name:string="";
gender:string="";
img:string="";
mobile_no:string="";
address:string="";

  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:UserdataService) { }

  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
        (para:any)=>{
            this.email=para["email_id"];
           
        }
    );
 
    this._data.getUserById(this.email).subscribe(
      (data:user[])=>{
        this.name=data[0].u_name;
        this.gender=data[0].u_gender;
        this.img=data[0].u_img;
        this.mobile_no=data[0].u_mobile_no;
        this.address=data[0].u_address;
      }
    );

  }
onUpdate(){
  let users=new user(this.email,'',this.name,'',this.gender,this.img,this.mobile_no,this.address);
  this._data.editUser(this.email,users).subscribe(
    ()=>{
      this._router.navigate(['/user']);
    }
  );
}
}
