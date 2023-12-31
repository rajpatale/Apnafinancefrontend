import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseResponce } from 'src/app/base-responce';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent implements OnInit {

  constructor(private cs:CommenserviceService,private rout:Router){}

  enqueryStatus:String='CIBIL_REQUIRED'
  enqueryStatus2:String='CIBIL_CHECKED'
    
  pancardNumber:number=0;
  firstName:String="";
  pagenumber: number=0;
  enquiryuser:any[];
  ngOnInit(): void {
    this.getEnquirydata(this.pagenumber);
  }

  nextuser()
  {
    this.pagenumber=this.pagenumber+1
    this.getEnquirydata(this.pagenumber)
  }
  privioususer()
  {
    this.pagenumber=this.pagenumber-1
    this.getEnquirydata(this.pagenumber)
  }

  getEnquirydata(pagenumber:number)
  {
  
    this.cs.getEnqueryStatusCheck(this.enqueryStatus,this.enqueryStatus2).subscribe((data:any)=>{
      //  console.log("pages",data.toatalPages)
      // if(this.pagenumber<data.totalPages)
      // {
        this.enquiryuser=data;
      // }
      // else{
      //   alert("No Data")
      // }
      
  
  })

}




searchEnquiryResult(){
  this.cs.searchEnquiryResult(this.firstName).subscribe((response:BaseResponce)=>{
  

     if(response.responceStatus==200)
     {
      this.enquiryuser=response.responceData;
     }

  }, (Error)=>{
    console.log(Error.error.responceStatus);
                   
    if(Error.error.responceStatus==404){

      alert(Error.error.responseMsg)
    }
  }
  );
}


deleteEnquiryUser(enq:any)
{
  alert("Delete Data")
       this.cs.deleteEnquiryUser(enq.eid).subscribe();
       window.location.reload();
}

checkCibil()
{

  this.cs.checkCibil(this.pancardNumber).subscribe();
  
  window.location.reload();

}



}
