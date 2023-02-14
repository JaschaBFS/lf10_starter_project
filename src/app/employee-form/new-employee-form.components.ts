import { Component } from '@angular/core';

import { newEmployee } from '../newEmployee';
import { EmployeeServiceService } from '../employee-service.service';
import {QualiServiceService} from "../quali-service.service";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {
  constructor(private employeeService: EmployeeServiceService, private qualiservice: QualiServiceService) {

  }
  model = new newEmployee("Lesch", "Jascha", "", "", "", "", );
  onSubmit(data: any) {
    this.employeeService.setEmployee(data);
    this.onCancel();
  }
  onCancel(){
    this.qualiservice.navigateTo('/employee');
  }
    }

