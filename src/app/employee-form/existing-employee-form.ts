import { Component } from '@angular/core';

import { EmployeeServiceService } from '../employee-service.service'
import {AppRoutingService} from "../app-routing.service";
import {Observable, of} from "rxjs";
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-existing-employee-form',
  templateUrl: './existing-employee-form.html',
  styleUrls: ['./existing-employee-form.css']
})
export class ExistingEmployeeFormComponent {
  public values$: Observable<Array<qualification>>;
  constructor(private employeeService: EmployeeServiceService, private router: AppRoutingService, private qualiService: QualiServiceService) {
    this.values$ = of([]);
  }
  ngOnInit(): void{
    this.getValues();
  }
  getValues(){
    this.values$ = this.qualiService.getListOfQualifications();
  }
  model = this.employeeService.selectedEmployee;
  async onSubmit(data: any) {
    console.log("daten sind gerade: "+data.skillSet);
    await this.employeeService.updateEmployee(data)?.then(r =>{
      this.onCancel();
    });
  }
  onCancel(){
    this.router.navigateTo('/employee-detail');
  }
}
