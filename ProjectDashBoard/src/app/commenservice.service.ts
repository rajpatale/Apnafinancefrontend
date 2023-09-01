import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommenserviceService {

  constructor(public http:HttpClient) { }


  createuser(data:FormData)
  {
    return this.http.post("http://localhost:9091/Admin/saveEmployee",data);
  }

  getuser(pagenumber:number)
  {
    return this.http.get("http://localhost:9091/Admin/getallemployeepagable/"+pagenumber)
  }

  searchUser(name:String)
  {
   return this.http.get("http://localhost:9091/Admin"+name)
  }

  sendAuthMail(emp:any)
  {
    return this.http.post("http://localhost:9091/Admin/sendMail",emp);

  }

  getemp(username,password)
  {
    return this.http.get("http://localhost:9091/Admin/getemp/"+username+"/"+password);
  }

  createEnquiry(customer:any)
  {
    return this.http.post("http://localhost:9091/Enquiry/createEnquiry/",customer);
  }

  getEnquiry(pagenumber:number)
  {
    return this.http.get("http://localhost:9091/Enquiry/getallEnquirypagable/"+pagenumber);
  }


  searchEnquiryResult(name:String)
  {
   return this.http.get("http://localhost:9091/Enquiry/findFirstName"+name)
  }


  deleteEnquiryUser(eid:any)
  {
   return  this.http.delete("http://localhost:9091/Enquiry/deleteEnquirydata/"+eid)
  }

  getEnqueryStatusCheck(status1,status2){

    return this.http.get("http://localhost:9091/Enquiry/enquirysByStatus/"+status1+"/"+status2)
  }

  VerifyEnquiry(eid:any)
  {
    return this.http.put("http://localhost:9091/Enquiry/updateUserStatus/"+eid,{});
  }


  checkCibil(pancardNumber:any)
  {
    return this.http.get("http://localhost:9091/checkCibil/"+pancardNumber);
  }
}
