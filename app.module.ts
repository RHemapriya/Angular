import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient,HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { EmployeeserviceService } from './employeeservice.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { OrderBy } from './order-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
    UpdateEmployeeComponent,
    OrderBy,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmployeeRoutingModule,
    HttpClientModule,

  ],
  providers: [HttpClient,EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
