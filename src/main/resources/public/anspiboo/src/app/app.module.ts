import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { OpfparameterComponent } from './opfparameter/opfparameter.component';
import { OpfsComponent } from './opfs/opfs.component';
import { OpfDetailComponent } from './opf-detail/opf-detail.component';
import {OpfService} from "./services/opf.service";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from "./services/messages.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {OpfparameterService} from "./services/opfparameter.service";



@NgModule({
  declarations: [
    AppComponent,
    OpfparameterComponent,
    OpfsComponent,
    OpfDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [OpfService, MessagesService, OpfparameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
