import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommenserviceService } from 'src/app/commenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
  constructor(private fb:FormBuilder,private router:Router,
              private cs:CommenserviceService){}
   loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }
  onLogin()
  {
     let username:string=this.loginForm.controls['username'].value;
     let password:string=this.loginForm.controls['password'].value;

     this.cs.getemp(username,password).subscribe((data:any)=>{
      
      if(data.responceData.userType=="re")
      {
               localStorage.setItem("userType","re");
           this.router.navigateByUrl('/dash/re')         
      }
 
       else if(data.responceData.userType=="oe")
      {
               localStorage.setItem("userType","oe");
           this.router.navigateByUrl('/dash/oe')         
      }
    else if(data.responceData.userType=="admin"){
     localStorage.setItem("userType", "admin");
     this.router.navigateByUrl('/dash/admin')
    }
    else if(data.responceData.userType=="cm"){
      localStorage.setItem("userType", "cm");
      this.router.navigateByUrl('/dash/cm')
     }
      else{
       alert("Enter vlid login credentials..!")
      }
     })


    
  }
}
