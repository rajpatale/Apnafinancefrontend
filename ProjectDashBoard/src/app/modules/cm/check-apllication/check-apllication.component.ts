import { Component } from '@angular/core';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-check-apllication',
  templateUrl: './check-apllication.component.html',
  styleUrls: ['./check-apllication.component.css']
})
export class CheckApllicationComponent {
  constructor(private cs:CommenserviceService) {}

  enquiries:any[];

  
  enquirystatus1:string='CIBIL_CHECKED';
  enquirystatus2:string="no";
  ngOnInit(): void {
    
    this.cs.getEnqueryStatusCheck(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
      console.log(data)
    })
  }
  approvedcase(eid:number)
  {
    this.cs.VerifyEnquiry(eid).subscribe((data:any)=>{
      window.location.reload();
    })
  }
  rejectedcase(eid:number){

    this.cs.VerifyEnquiry(eid).subscribe((data:any)=>{
      window.location.reload();
    })
  }

}
