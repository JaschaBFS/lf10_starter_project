import { Component } from '@angular/core';

import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  model = new Employee(18, "Mustermann", "Max", "Stiftstraße 12", "28219", "Bremen", "0157123456789");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newEmployee() {
    this.model = new Employee(42, "", "", "", "", "", "");
  }
}
