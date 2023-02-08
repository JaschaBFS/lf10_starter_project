import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.css']
})
export class QualificationDetailComponent {
  listOfEmployees$ : Observable<Employee[]> ;
  qualification : qualification | undefined;
  constructor( private http: HttpClient, private qualiService: QualiServiceService) {
    this.listOfEmployees$ = of([]);
    this.qualification = this.qualiService.selectedQuali;
    this.getEmployees(this.qualiService.selectedQuali);
  }

  getEmployees(quali: qualification) : void {
    this.listOfEmployees$ = this.qualiService.getListOfEmployeesForQualification(quali);
  }

}
