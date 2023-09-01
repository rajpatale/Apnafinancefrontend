import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseResponce } from 'src/app/base-responce';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(private cs:CommenserviceService,private rout:Router){}

  enqueryStatus:String="CREATED"
  enqueryStatus2:String="no"

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

SendToOe(enq:any)
{
this.cs.VerifyEnquiry(enq.eid).subscribe((data:any)=>{
  window.location.reload();
})
}

}


