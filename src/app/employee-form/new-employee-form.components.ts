import { Component } from '@angular/core';

import { newEmployee } from '../newEmployee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {
  constructor(private employeeService: EmployeeServiceService) {

  }
  model = new newEmployee("Lesch", "Jascha", "", "", "", "", );
  onSubmit(data: any) {
    this.employeeService.setEmployee(data);
  }
    }

