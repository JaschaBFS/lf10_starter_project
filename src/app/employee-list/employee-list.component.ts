import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {QualiServiceService} from "../quali-service.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient,private keycloackService:KeycloakService, private qualiservice: QualiServiceService) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend');
  }
  logout():void{
    this.keycloackService.logout();
  }

  openNewEmployeeForm() {
    this.qualiservice.navigateTo('/newEmployee');
  }
}
