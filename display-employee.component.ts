import { Component, OnInit } from '@angular/core';
import{Employee,EmployeeserviceService}from '../employeeservice.service';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
title="Display Employee";
service:EmployeeserviceService;
  constructor(service:EmployeeserviceService) { 
    this.service=service;
  }
employees:Employee[]=[];
  ngOnInit() {
    this.service.fetchEmployees();
    this.employees=this.service.getEmployees();
  }
  delete(id:number)
  {
    this.service.delete(id);
  }
column:string="id";
order:boolean=true;
sort(column:string)
{
 if(this.column==column)
 {
 this.order=!this.order;
 }
 else{
 this.order=true;
 this.column=column;
 }
}
}


