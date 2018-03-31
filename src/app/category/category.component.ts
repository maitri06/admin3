import { Component, OnInit } from '@angular/core';
import { CatdataService } from '../catdata.service';
import { category } from "./categorymodel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category:category[]=[];
  public cat1:category[]=[];

  delarr:category[]=[];
  txtsearch:string="";

  constructor(public _data:CatdataService) { }

  ngOnInit() {
    this._data.getAllCategory().subscribe(
      (data:any)=>{
        this.category=data;
        this.cat1=data;
      }
    )
  }
  onDeleteCategory(item){
    this._data.deleteCategory(item.pk_cat_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.category.splice(this.category.indexOf(item),1);
      }
    )
  } 
  onSearchCategory() 
  {
    if(this.txtsearch!='')
    {
      this.category=this.cat1.filter((x)=>x.cat_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.category=this.cat1;
      
    }
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
      this._data.delAllFeedback (this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               
                   this.feedback.splice(this.feedback.indexOf(this.delarr[this.i]),1);
                 
            }
            
          
          },
          function(err){console.log(err);},
          function(){

            console.log("Complete");
          }
        
      );

  }
}

 
}
