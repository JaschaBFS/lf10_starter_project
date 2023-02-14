import {Component, OnInit} from '@angular/core';
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.css']
})
export class QualificationDetailComponent implements OnInit{
  listOfEmployees$ : qualification = new qualification();
  qualification : qualification;
   constructor(private qualiService: QualiServiceService) {
     this.qualification = this.qualiService.selectedQuali;
   }

  async ngOnInit() {
    await this.getEmployees(this.qualiService.selectedQuali);
  }

  async getEmployees(quali: qualification) : Promise<void> {
    await this.qualiService.getListOfEmployeesForQualification(quali).then(r => {this.listOfEmployees$ = r;});
  }

  public add() : void{
     this.qualiService.navigateTo('/quali-add');
  }

}
