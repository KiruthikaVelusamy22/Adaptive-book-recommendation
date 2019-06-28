import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
 } from '@angular/material';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from "./app.router";
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { Register2Component } from './register2/register2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { MoodOfDayComponent } from './mood-of-day/mood-of-day.component';
//import { RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PagenotfoundComponent,
    UserLoginComponent,
    HomeComponent,
    CardComponent,
    ViewDetailsComponent,
    Register2Component,
    NavbarComponent,
    RegisteruserComponent,
    MoodOfDayComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([{
      path:'home', component: HomeComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
