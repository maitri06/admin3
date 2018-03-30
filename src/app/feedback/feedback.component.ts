import { Component, OnInit } from '@angular/core';
import { FeedbackdataService } from '../feedbackdata.service';
import { feedback } from "./feedbackmodel";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public feedback:feedback[]=[];
  delarr:feedback[]=[];
i:number=0;

   
  constructor(public _data:FeedbackdataService) { }

  ngOnInit() {
    this._data.getAllFeedback().subscribe(
      (data:any)=>{
        this.feedback=data;
      }
    )
  } 
  onDeleteFeedback(item){
    this._data.deleteFeedback(item.f_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.feedback.splice(this.feedback.indexOf(item),1);
      }
    )
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
