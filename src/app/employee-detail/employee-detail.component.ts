import { Component} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent{

  employee : Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService) {
    this.employee = this.employeeService.selectedEmployee;
  }

}
