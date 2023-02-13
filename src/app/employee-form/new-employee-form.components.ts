import { Component } from '@angular/core';

import { newEmployee } from '../newEmployee';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {
  constructor( ) {
    this.skills = [];
  }
  model = new newEmployee("Lesch", "Jascha", "", "", "", "", );
  skills : string[];

  onSubmit(data: any) {
    console.log(typeof data);
    console.log(data.toString());
    console.log(data);
    this.skills.push(data.skillset)
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skills);
    console.log(this.model);
  }


}
