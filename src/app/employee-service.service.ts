import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {Observable} from "rxjs";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/utils";
import {qualification} from "./qualification";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  bearer = '';
  baseUrl = '/employees';
  selectedEmployee: Employee;
  apiUrl = '/backend'
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
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

  setEmployee(employee:Employee) {
    try{return new Promise((resolve) => {
      this.http.post<any>(this.apiUrl + '/', employee)
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
