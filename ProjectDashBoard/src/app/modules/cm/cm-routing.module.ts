import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApllicationFormComponent } from './apllication-form/apllication-form.component';
import { CheckApllicationComponent } from './check-apllication/check-apllication.component';
import { GenrateSanctionComponent } from './genrate-sanction/genrate-sanction.component';
import { SendMailCmComponent } from './send-mail-cm/send-mail-cm.component';

const routes: Routes = [
  {path:'apllicationform', component:ApllicationFormComponent},
  {path:'checkAplli', component:CheckApllicationComponent},
  {path:'gsanction', component:GenrateSanctionComponent},
  {path:'sendmailcm', component:SendMailCmComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
