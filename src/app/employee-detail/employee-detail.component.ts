import { Component, OnInit } from '@angular/core';
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
export class EmployeeDetailComponent implements OnInit{

  employee : Employee;

  constructor(private http: HttpClient, private router: AppRoutingService) {
    this.employee = new Employee();
  }

  async ngOnInit() {
    await this.getEmployee();
  }
  getEmployee() : void {
    this.http.get<Employee>('/employee/' + this.router.getEmployeeId()).subscribe(
      employee => {
        this.employee = employee;
      }
    );
  }

}
