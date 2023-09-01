import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { ApllicationFormComponent } from './apllication-form/apllication-form.component';
import { CheckApllicationComponent } from './check-apllication/check-apllication.component';
import { GenrateSanctionComponent } from './genrate-sanction/genrate-sanction.component';
import { SendMailCmComponent } from './send-mail-cm/send-mail-cm.component';


@NgModule({
  declarations: [
    ApllicationFormComponent,
    CheckApllicationComponent,
    GenrateSanctionComponent,
    SendMailCmComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }
