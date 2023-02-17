import { Component } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service'
import {AppRoutingService} from "../app-routing.service";

@Component({
  selector: 'app-existing-employee-form',
  templateUrl: './existing-employee-form.html',
  styleUrls: ['./existing-employee-form.css']
})
export class ExistingEmployeeFormComponent {
  constructor(private employeeService: EmployeeServiceService, private router: AppRoutingService) {
  }

  model = this.employeeService.selectedEmployee;
  onSubmit(data: any) {
    console.log(this.employeeService.updateEmployee(data));
    this.router.navigateTo('/employee-detail');
  }
  onCancel(){
    this.router.navigateTo('/employee-detail');
  }
}
