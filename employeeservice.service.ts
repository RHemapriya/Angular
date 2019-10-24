import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  http:HttpClient;
  employees:Employee[]=[];
constructor(http:HttpClient){
  this.http=http;
}
fetched:boolean=false;
fetchEmployees(){
  this.http.get('./assets/employees.json')
  .subscribe(
    data=>{
      if(!this.fetched){
        this.convert(data);
        this.fetched=true;
      }
    }
  );
}
getEmployees():Employee[]{
  return this.employees;
}
convert(data1:any){
  for(let o of data1){
    let e=new Employee(o.id,o.name);
    this.employees.push(e);
  }
}

add(e:Employee){
this.employees.push(e);
}
delete(id:number)
{
  let foundIndex:number=-1;
  for(let i=0;i<this.employees.length;i++)
  {
    let e=this.employees[i];
    if(id==e.id){
      foundIndex=i;
      break;
    }
  }
  this.employees.splice(foundIndex,1);
}
}
export class Employee{
id:number;
name:string;
  constructor(id:number,name:string) {
    this.id=id;
    this.name=name;
   }
}
