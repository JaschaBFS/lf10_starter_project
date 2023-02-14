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
    this.skills = [];
  }
  model = new newEmployee("Lesch", "Jascha", "", "", "", "", );
  skills : string[];
  onSubmit(data: any) {
    this.skills.push(data.skillset)
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skills);
    console.log(this.employeeService.setEmployee(this.model));
    this.model = new newEmployee("", "","","", "", "", [])
  }
    }

