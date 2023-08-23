import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { FillLoanFormComponent } from './fill-loan-form/fill-loan-form.component';


@NgModule({
  declarations: [
    ViewEnquiryComponent,
    AddEnquiryComponent,
    SendMailComponent,
    FillLoanFormComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ReModule { }
