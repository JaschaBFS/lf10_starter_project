import { Component } from '@angular/core';

import { newEmployee } from '../newEmployee';
import { EmployeeServiceService } from '../employee-service.service';
import {AppRoutingService} from "../app-routing.service";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {
  constructor(private employeeService: EmployeeServiceService, private router: AppRoutingService) {

  }
  model = new newEmployee("", "", "", "", "", "", );
  onSubmit(data: any) {
    this.employeeService.setEmployee(data);
    this.onCancel();
  }
  onCancel(){
    this.router.navigateTo('/employee');
  }
    }

