import { Component } from '@angular/core';

import { newEmployee } from '../newEmployee';
import { EmployeeServiceService } from '../employee-service.service';
import {AppRoutingService} from "../app-routing.service";
import {Observable, of} from "rxjs";
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent {
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
  model = new newEmployee("", "", "", "", "", "", []);
  async onSubmit(data: any) {
    console.log("daten sind gerade: "+data.skillSet);
    await this.employeeService.setEmployee(data)?.then(r =>{
      this.onCancel();
    });
  }
  onCancel(){
    this.router.navigateTo('/employee');
  }


    }

