import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {AppRoutingService} from "../app-routing.service";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  employee : Observable<Employee>;

  constructor(private http: HttpClient, private router: AppRoutingService) {
    this.employee = new Observable<Employee>();
  }

  getEmployee() : void {
    //this.employee = this.http.get<Employee>('/employees/' + this.employee.id);
  }

}
