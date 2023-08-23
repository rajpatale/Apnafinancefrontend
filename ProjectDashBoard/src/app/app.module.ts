import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { LoginComponent } from './entry/login/login.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppDashBoardComponent } from './entry/app-dash-board/app-dash-board.component';
import { AppHeaderComponent } from './template/app-header/app-header.component';
import { AppSideMenuComponent } from './template/app-side-menu/app-side-menu.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    AppDashBoardComponent,
    AppHeaderComponent,
    AppSideMenuComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, HttpClientModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
