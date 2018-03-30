import { Component, OnInit } from '@angular/core';
import { UserdataService } from "../userdata.service";
import { user } from './usermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user:user[]=[];
delarr:user[]=[];
i:number=0;
public users1:user[]=[];
   
  txtsearch:string="";
email:string=""; 
  constructor(public _data:UserdataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:any)=>{

        this.user=data;
        this.users1=data;
        this.email=localStorage.getItem('Email');
      }
    )
  }
  onDeleteUser(item){
    this._data.deleteUser(item.pk_email_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.user.splice(this.user.indexOf(item),1);
      }
    )
  } 
  editUser(item){
    this._router.navigate(['/edituser',item.pk_email_id]);
  }
  chkchng(item)
  {
    if(this.delarr.find(x=>x==item))
    {
      this.delarr.splice(this.delarr.indexOf(item),1);
    }
    else
    {
      this.delarr.push(item);
    }
  }

  delAll()
  {
    
     console.log(this.delarr);
      if(confirm("Are You Sure want to delete?"))
      {
      this._data.delAllUser (this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               
                   this.user.splice(this.user.indexOf(this.delarr[this.i]),1);
                 
            }
            
          
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );

}
  }
  onSearch()
  {
    if(this.txtsearch!='')
    {
      this.user=this.users1.filter((x)=>x.u_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.user=this.users1;
      
    }
  }
}
