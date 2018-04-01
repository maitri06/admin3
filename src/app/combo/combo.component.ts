import { Component, OnInit } from '@angular/core';
import {CombodataService  } from "../combodata.service";
import {combo} from "./combomodel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
public combo1:combo[]=[];
public combo2:combo[]=[];
delarr:combo[]=[];
  i:number=0;

  txtsearch:string="";

  constructor(public _data: CombodataService, public _router: Router) { }

  ngOnInit() {
  
      this._data.getAllCombo().subscribe(
        (data: any) => {
           this.combo1 = data;
           this.combo2 = data;
           console.log(data);
           
         },
        function (e) { alert(e); },
        function () { }
      )
  
  
    }
    onDeleteProduct(item) {
      this._data.deleteCombo(item.pk_combo_id).subscribe(
        (data: any) => {
          console.log(data);
          this.combo1.splice(this.combo1.indexOf(item), 1);
        }
      )
    }
   /* editMen(item) {
      this._router.navigate(['/editmen', item.pk_combo_id]);
    }*/
    onSearch()
    {
      if(this.txtsearch!='')
      {
        this.combo1=this.combo2.filter((x)=>x.combo_name.indexOf(this.txtsearch)!==-1);
        
      }
      else
      {
        this.combo1=this.combo2; 
        
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
        this._data.delAllCombo(this.delarr).subscribe(
          
            (data:any)=>{
              
              for(this.i=0 ; this.i<this.delarr.length ; this.i++)
              {
                 
                     this.combo1.splice(this.combo1.indexOf(this.delarr[this.i]),1);
                   
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

