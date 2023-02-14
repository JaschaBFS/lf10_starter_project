import { Component } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service'
import {QualiServiceService} from "../quali-service.service";

@Component({
  selector: 'app-existing-employee-form',
  templateUrl: './existing-employee-form.html',
  styleUrls: ['./existing-employee-form.css']
})
export class ExistingEmployeeFormComponent {
  constructor(private employeeService: EmployeeServiceService, private qualiservice: QualiServiceService) {
  }

  model = this.employeeService.selectedEmployee;
  onSubmit(data: any) {
    console.log(this.employeeService.updateEmployee(data));
  }
}
