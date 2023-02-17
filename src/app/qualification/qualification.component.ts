import { Component,OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {qualification} from "../qualification";
import {AppRoutingService} from "../app-routing.service";
import {QualiServiceService} from '../quali-service.service';


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit{

  qualification$: Observable<qualification[]>;

  constructor(private qualiService: QualiServiceService, private router : AppRoutingService) {
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
    this.router.navigateTo('/quali-detail');
  }

}
