import { Component, OnInit } from '@angular/core';
import {category } from "../category/categorymodel";
import { CatdataService } from "../catdata.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
}) 
export class AddcatComponent implements OnInit {
  cat_id:number;
  cat_name:string="";
  public category:category[]=[];
  constructor(public _data:CatdataService,public _router:Router) { }

  ngOnInit() {
  }
  categoryAdd()
  {
    let item=new category(this.cat_id,this.cat_name);
    this._data.addCategory(item).subscribe(
      (data:any)=>{
        console.log(this.cat_name);
        console.log(data);
        this._router.navigate(['/category']);
      }
    )
  }

}
