import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseResponce } from 'src/app/base-responce';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-vie-employee',
  templateUrl: './vie-employee.component.html',
  styleUrls: ['./vie-employee.component.css']
})
export class VieEmployeeComponent implements OnInit {

  ename:String="";
  pagenumber: number=0;

  constructor(private cs:CommenserviceService,private rout:Router){}

  employee:any[];
  ngOnInit(): void {
    this.getuserdata(this.pagenumber);
  }

  nextuser()
  {
    this.pagenumber=this.pagenumber+1
    this.getuserdata(this.pagenumber)
  }
  privioususer()
  {
    this.pagenumber=this.pagenumber-1
    this.getuserdata(this.pagenumber)
  }

  getuserdata(pagenumber:number)
  {
  
    this.cs.getuser(pagenumber).subscribe((data:any)=>{
       console.log("pages",data.toatalPages)
      if(this.pagenumber<data.totalPages)
      {
        this.employee=data.content;
      }
      else{
        alert("No Data")
      }
      
  
  })
}

searchResult(){
  this.cs.searchUser(this.ename).subscribe((response:BaseResponce)=>{
  

     if(response.responceStatus==200)
     {
      this.employee=response.responceData;
     }

  },


  (Error)=>{
    console.log(Error.error.responceStatus);
                   
    if(Error.error.responceStatus==404){

      alert(Error.error.responseMsg)
    }
  }
  );
}

sendAuthMail(emp:any)
{
  
    this.cs.sendAuthMail(emp).subscribe();
    alert("Login credintial send");
}



}
