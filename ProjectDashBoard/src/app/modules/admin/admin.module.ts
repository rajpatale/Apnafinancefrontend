import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { VieEmployeeComponent } from './vie-employee/vie-employee.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AddEmployeeComponent,
    VieEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
