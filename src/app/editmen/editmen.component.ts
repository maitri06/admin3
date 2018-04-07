import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ProductdataService } from '../productdata.service';
import { product } from "../product/productmodel";


@Component({
  selector: 'app-editmen',
  templateUrl: './editmen.component.html',
  styleUrls: ['./editmen.component.css']
})
export class EditmenComponent implements OnInit {
 public _subscription:Subscription;
  id:number;
  name:string="";
  price:number;
  desci:string="";
  
  constructor(public _router:Router,public _activatedRoute:ActivatedRoute,public _data:ProductdataService) { }
  
  ngOnInit() {
    this._subscription=this._activatedRoute.params.subscribe(
      (para:any)=>{
          this.id=para["pk_pro_id"];
         
      }
  );

  this._data.getProductById(this.id).subscribe(
    (data:product[])=>{
      this.name=data[0].pro_name;
      this.price=data[0].pro_price;
      this.desci=data[0].pro_desci;
    }
  );
  }
  onMenUpdate(){
    let products=new product(null,this.name,this.price,'','','','',this.desci,'','',1);
    this._data.editProduct(this.id,products).subscribe(
      ()=>{
        this._router.navigate(['/products']);
      }
    );
  }

} 
