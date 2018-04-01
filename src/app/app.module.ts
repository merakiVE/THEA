import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from "angular2-materialize";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

//Services
import { ConnectService } from './_services/connect.service';
import { CommonDataService } from './_services/commonData.service';
import { BuildService } from './_services/build.service';

//Components
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavComponent } from './nav/nav.component';
import { ConnectComponent } from './connect/connect.component';
import { BuildComponent } from './build/build.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ConnectComponent,
    BuildComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    CommonModule,
    ToastrModule.forRoot(),
    HttpModule
  ],
  providers: [
    ConnectService,
    CommonDataService,
    BuildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
