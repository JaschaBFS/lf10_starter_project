import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient} from "@angular/common/http";
import {AppRoutingService} from "../app-routing.service";
import {KeycloakService} from "keycloak-angular";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees$: Employee[] = [];

  constructor(private http: HttpClient,private keycloackService:KeycloakService, private employeeService: EmployeeServiceService, private router: AppRoutingService) {
    this.getAllEmployees();
  }

  async getAllEmployees() {
    this.employees$ = await this.employeeService.getAllEmployees();
  }
  logout():void{
    this.keycloackService.logout();
  }

  goToQualifications(){
    this.router.navigateTo('/quali');
  }

  openNewEmployeeForm() {
    this.router.navigateTo('/new-employee');
  }

  employeeDetail(employee : Employee){
    console.log(employee);
    this.employeeService.setSelectedEmployee(employee);
    this.router.navigateTo('/employee-detail');
  }
}
