import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdata.service';
import { product } from './productmodel';
import { Router } from '@angular/router';
import { product_cat } from "./product_cat_model";
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 public product: product_cat[] = [];
  public product1: product_cat[] = [];
  public product0:product[]=[];

  delarr:product_cat[]=[];
  i:number=0;

  txtsearch:string="";
  
  constructor(public _data: ProductdataService, public _router: Router) { }

  ngOnInit() {
    this._data.getProductAndCat().subscribe(
      (data: any) => {
         this.product = data;
         this.product1 = data;
         console.log(data);
         
       },
      function (e) { alert(e); },
      function () { }
    )

    /*this._data.getAllProduct().subscribe(
      (data: any) => {
        this.product0 = data;
        
      },
      function (e) { alert(e); },
      function () { }
    )*/
  }
  onDeleteProduct(item) {
    this._data.deleteProduct(item.pk_pro_id).subscribe(
      (data: any) => {
        console.log(data);
        this.product.splice(this.product.indexOf(item), 1);
      }
    )
  }
  editMen(item) {
    this._router.navigate(['/editmen', item.pk_pro_id]);
  }
  onSearch()
  {
    if(this.txtsearch!='')
    {
      this.product=this.product1.filter((x)=>x.pro_name.indexOf(this.txtsearch)!==-1);
      
    }
    else
    {
      this.product=this.product1; 
      
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
      this._data.delAllProd(this.delarr).subscribe(
        
          (data:any)=>{
            
            for(this.i=0 ; this.i<this.delarr.length ; this.i++)
            {
               
                   this.product.splice(this.product.indexOf(this.delarr[this.i]),1);
                 
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
