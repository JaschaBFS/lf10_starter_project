import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient} from "@angular/common/http";
import {newEmployee} from "./newEmployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  selectedEmployee: Employee;
  apiUrl = '/backend';
  private skillSet: string[];
  model = new newEmployee;
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.skillSet = [];
  }

  async getEmployeeById(id : number) : Promise<Employee> {
      console.log(this.apiUrl + '/' + id + " wird aufgerufen");
      return new Promise<Employee>((resolve) =>{
        this.http.get<Employee>(this.apiUrl + '/' + id)
          .subscribe(employee$ =>{
            console.log("employee ist : " + employee$);
            resolve(employee$);
          });
      })
  }

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  setEmployee(data:any) {
    this.skillSet.push(data.skillSet);
    console.log(this.skillSet);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skillSet);
    console.log(this.model);
    try{return new Promise((resolve) => {
      this.http.post<any>(this.apiUrl + '/', this.model)
        .subscribe(
          employee$ => {
            resolve(employee$);
            console.log(employee$);
          }
        );
    })}catch (e){
      console.log(e as Error);
    }
    return null;
}
  updateEmployee(data: any){
    this.skillSet.push(data.skillset);
    console.log(this.skillSet);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skillSet);
    try{return new Promise((resolve) => {
      this.http.put<any>(this.apiUrl + '/' + this.selectedEmployee.id, this.model)
        .subscribe(
          employee$ => {
            resolve(employee$);
          }
        );
    })}catch (e){
      console.log(e as Error);
    }
    return null;
  }
  deleteEmployee() {
    try {return new Promise((resolve) => {
      this.http.delete<any>(this.apiUrl + '/' + this.selectedEmployee.id).subscribe(employee$ =>{
        resolve(employee$);
      });
    })}
  catch (e){
    console.log(e as Error);
  }
  return null;
}
  }

