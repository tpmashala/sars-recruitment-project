import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeInformationComponent } from './pages/employee-information/employee-information.component';
import { ContactInformationComponent } from './pages/contact-information/contact-information.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { ViewEmployeeDetailsComponent } from './pages/view-employee-details/view-employee-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmCapturedDataComponent } from './pages/confirm-captured-data/confirm-captured-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeInformationComponent,
    ContactInformationComponent,
    EmployeesListComponent,
    ViewEmployeeDetailsComponent,
    HomeComponent,
    ConfirmCapturedDataComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
