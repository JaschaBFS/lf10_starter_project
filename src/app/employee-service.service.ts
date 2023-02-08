import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  bearer = '';
  baseUrl = '/employees';
  selectedEmployee: Employee;
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
}
