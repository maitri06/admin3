import { Component, OnInit } from '@angular/core';
import { product } from "../product/productmodel";
import { ProductdataService } from "../productdata.service";
import { Router } from "@angular/router";
import { category } from "../category/categorymodel";
import { CatdataService } from "../catdata.service";


@Component({
  selector: 'app-menadd',
  templateUrl: './menadd.component.html',
  styleUrls: ['./menadd.component.css']
})
export class MenaddComponent implements OnInit {

  constructor(public _dataCat: CatdataService, public _data: ProductdataService, public _router: Router) { }

  name: string = "";
  price: number;
  color: string = "";
  img1: string = "";
  img2: string = "";
  img3: string = "";
  desci: string = "";
  brand:string="";
  gender:string="";
  fk_cat_id: number;
  cat: category[] = [];

  public product: product[] = [];

  ngOnInit() {
    this._dataCat.getAllCategory().subscribe(
      (data: any) => {
        this.cat = data;
        console.log(this.cat);
      },
      function (e) {
        alert(e);
      },
      function () {

      }
    )
  }
  menadd() {
    console.log(this.fk_cat_id);
    let item = new product( null,this.name, this.price, this.color, this.img1, this.img2, this.img3, this.desci, this.brand,this.gender,this.fk_cat_id);
    this._data.addMen(item).subscribe(
      (data: any) => {
      
        console.log(data);
        this._router.navigate(['/products']);
      }
    )
  }


}
