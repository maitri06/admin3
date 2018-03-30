/*import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { OrderdataService } from '../orderdata.service';
import { order } from "./ordermodel";
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit,AfterViewInit{
  public order:order[]=[];
  displayedColumns = ['date','Quentity'];
  dataSource: MatTableDataSource<order>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public _data:OrderdataService) { }
 
  ngOnInit() {
    this.dataSource = new MatTableDataSource<order>(this.order);
    this._data.getAllOrder().subscribe(
      (data:any)=>{
        this.order=data;
      }
    )
  }
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
      }
   
  
}*/
import { Component, OnInit } from '@angular/core';
import { OrderdataService } from '../orderdata.service';
import { order } from "./ordermodel";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order:order[]=[];
  constructor(public _data:OrderdataService) { }

  ngOnInit() {
    this._data.getAllOrder().subscribe(
      (data:any)=>{
        this.order=data;
      }
    )
  }
 
}
