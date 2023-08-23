import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit{

   usertype:string;

  ngOnInit(): void {
    let ut:string=localStorage.getItem("userType");
    if(ut=='re')
    {
    this.usertype='Relationship Manager'
    }
    else if(ut=='oe')
    {
    this.usertype='Operational Manager'
    }
    else if(ut=='admin')
    {
      this.usertype='Admin Login'
      
    }
  }
}
