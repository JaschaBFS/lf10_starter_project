import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.css']
})
export class QualificationDetailComponent {
  listOfEmployees$ : Observable<qualification> = new Observable<qualification>();
  qualification : qualification;
  constructor(private qualiService: QualiServiceService) {
    this.qualification = this.qualiService.selectedQuali;
    this.getEmployees(this.qualiService.selectedQuali);
  }

  getEmployees(quali: qualification) : void {
    //this.listOfEmployees$ = this.qualiService.getListOfEmployeesForQualification(quali);
  }

}
