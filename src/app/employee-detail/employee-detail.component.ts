import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {EmployeeServiceService} from "../employee-service.service";
import {ExistingEmployeeFormComponent} from "../employee-form/existing-employee-form";
import {AppRoutingService} from "../app-routing.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{
  employee : Employee = new Employee();
  constructor(private employeeService: EmployeeServiceService, private router: AppRoutingService) {
    this.employee = this.employeeService.selectedEmployee;
  }

  async ngOnInit(){
    if(typeof this.employeeService.selectedEmployee.id !== 'undefined'){
      this.employee = await this.employeeService.getEmployeeById(this.employeeService.selectedEmployee.id);
    }
}

  onEdit(){
    this.router.navigateTo('/update-employee');
  }

  onDelete(){
    this.employeeService.deleteEmployee();
    this.router.navigateTo('employee');
  }

}
