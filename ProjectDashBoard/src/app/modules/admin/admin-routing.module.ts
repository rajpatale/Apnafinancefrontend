import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { VieEmployeeComponent } from './vie-employee/vie-employee.component';

const routes: Routes = [
  { path:'addemployee', component:AddEmployeeComponent},
  {path:'viewemp' , component:VieEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
