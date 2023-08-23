import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  implements OnInit{

  constructor(private fb:FormBuilder ,private cs:CommenserviceService){

  }
  profileImg:any;
  employeeDetailsForm:FormGroup

  reader=new FileReader();
  profImg:any;

  ngOnInit(): void {

    this.employeeDetailsForm=this.fb.group({
      eid:[0],
      ename:[],
      esirname:[],
      empEmail:[],
      address:[],
      userType:[]

    });
   
  }
  onSelectProfileImg(event:any){
    this.profileImg=event.target.files[0];
    this.reader.onload=e=>this.profImg=this.reader.result
    this.reader.readAsDataURL(this.profileImg); 

  }


  
  onSubmitUserDetailsForm()
  {
    alert("Saved Data")
    const formData=new FormData();
    let userString=JSON.stringify(this.employeeDetailsForm.value);

    formData.append("empolyee", userString);
    formData.append("profileImg", this.profileImg);
   
    

    this.cs.createuser(formData).subscribe();
  }




}
