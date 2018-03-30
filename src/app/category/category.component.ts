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
    this._data.deleteCategory(item.cat_id).subscribe(
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
}

 

