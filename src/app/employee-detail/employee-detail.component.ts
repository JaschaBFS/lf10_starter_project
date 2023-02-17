import { Component} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";
import {ExistingEmployeeFormComponent} from "../employee-form/existing-employee-form";
import {AppRoutingService} from "../app-routing.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent{

  employee : Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService, private router: AppRoutingService) {
    this.employee = this.employeeService.selectedEmployee;
  }

  onEdit(){
    this.router.navigateTo('/update-employee');
  }

  onDelete(){
    this.employeeService.deleteEmployee();
    this.router.navigateTo('employee');
  }

}
