import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService, Employee } from '../employeeservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
title="Add Employee";
router:Router;
createdEmployee:Employee;
createdFlag:boolean=false;
service:EmployeeserviceService;
  constructor(service:EmployeeserviceService,router:Router) {
    this.service=service;
    this.router=router;
   }

  ngOnInit() {
  }
  add(data:any){
    this.createdEmployee=new Employee(data.id,data.name)
    this.service.add(this.createdEmployee);
    this.router.navigateByUrl('app-display-employee');
  }

}
