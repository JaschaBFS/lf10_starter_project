import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {Observable} from "rxjs";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/utils";
import {qualification} from "./qualification";
import {newEmployee} from "./newEmployee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  bearer = '';
  baseUrl = '/employees';
  selectedEmployee: Employee;
  apiUrl = '/backend';
  private skills: string[];
  model = new newEmployee;
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.skills = [];
  }

  getEmployee(): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + this.selectedEmployee.id, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/jason')
        .set('Authorization', `Bearer ${this.bearer}`)});
  }

  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  setEmployee(data:any) {
    this.skills.push(data.skillset);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skills);
    try{return new Promise((resolve) => {
      this.http.post<any>(this.apiUrl + '/', this.model)
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
  updateEmployee(data: any){
    this.skills.push(data.skillset);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skills);
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
}
