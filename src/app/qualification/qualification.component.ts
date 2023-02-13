import { Component,OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {qualification} from "../qualification";
import {Router} from "@angular/router";
import {QualiServiceService} from '../quali-service.service';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit{

  qualification$: Observable<qualification[]>;

  constructor(private qualiService: QualiServiceService) {
    this.qualification$ = of([]);
  }

  ngOnInit(): void{
    this.getQualifications();
  }

  getQualifications() : void{
    this.qualification$ = this.qualiService.getListOfQualifications();
  }

  onClick(quali : qualification):void{
    this.qualiService.setSelectedQuali(quali);
    this.qualiService.navigateTo('/quali-detail');
  }

}
