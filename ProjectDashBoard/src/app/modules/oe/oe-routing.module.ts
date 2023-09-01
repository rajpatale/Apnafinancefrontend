import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyAppComponent } from './verify-app/verify-app.component';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';

const routes: Routes = [
  
  {path:'checkCibil', component:CheckCibilComponent},
  {path:'verifyApp' , component:VerifyAppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
