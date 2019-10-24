import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DisplayEmployeeComponent } from '../display-employee/display-employee.component';
import {UpdateEmployeeComponent} from '../update-employee/update-employee.component'
const routes:Routes=[
  {
    path:'app-add-employee',
    component:AddEmployeeComponent
  },
  {
  path:'app-display-employee',
  component:DisplayEmployeeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
   
  
})




export class EmployeeRoutingModule { }
