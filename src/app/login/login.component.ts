import { Component, OnInit } from '@angular/core';
import { user } from '../user/usermodel';
import { LogindataService } from '../logindata.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email_id:string;
password:string;
name1:string="";


  constructor(public data:LogindataService,public _router:Router) { }

  ngOnInit() {
  }
  taskSubmit(){
    let item=new user(this.email_id,this.password,'','','','','','');
    this.data.login(item).subscribe(
      (data:user[])=>{
        console.log(data);
        
        if(data.length==1)
        {
         
         /* name1=this.data.name;
          localStorage.setItem('Name',this.data.name1);*/
          localStorage.setItem('Email',this.email_id);
          localStorage.setItem('Name',data[0].u_name);
          this._router.navigate(['/order']);
        }
        else{
          alert("na thayu");
        }
      }
    );
  }
 /* onLogin(){
    let item=new user(this.email_id,this.password,'','','','','','');
    this.data.login(item).subscribe(
      (data:user[])=>{
        console.log(data);
        
        if(data.length==1)
        {
         
          localStorage.setItem('Email',this.email_id);
          localStorage.setItem('Name',data[0].u_name);
          this._router.navigate(['/order']);
        }
        else{
          alert("na thayu");
        }
      }
    );
  }*/

}
