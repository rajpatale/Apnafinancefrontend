import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{

  
  constructor(private fb:FormBuilder ,private cs:CommenserviceService){

  }

  enquiryDetailsForm:FormGroup;
  ngOnInit(): void {
    this.enquiryDetailsForm=this.fb.group({
      eid:[0],
      firstName:[],
      lastName:[],
      age:[0],
      mobileNumber:[0],
      pancardNumber:[0],
      enquiryStatus:[],
      email:[]

    });
  }

  onSubmitCustomerform()
  {
    if(this.enquiryDetailsForm.controls['eid'].value==0){
    alert("!!Save Data")
    console.log(this.enquiryDetailsForm.value);
    this.cs.createEnquiry(this.enquiryDetailsForm.value).subscribe();}
  
}
}
