import {Component, OnInit} from '@angular/core';
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";
import {AppRoutingService} from "../app-routing.service";
import {Employee} from "../Employee";
import {of} from "rxjs";

@Component({
  selector: 'app-qualification-detail',
  templateUrl: './qualification-detail.component.html',
  styleUrls: ['./qualification-detail.component.css']
})
export class QualificationDetailComponent implements OnInit{
  listOfEmployees$ : qualification = new qualification();
  qualification : qualification;

  allEmployees : Employee[] =  [];

  displayedColumns : string[] = ['id','lastName','firstName'];
   constructor(private qualiService: QualiServiceService,private router: AppRoutingService) {
     this.qualification = this.qualiService.selectedQuali;
   }

  async ngOnInit() {
    await this.getEmployees(this.qualiService.selectedQuali);
  }

  async getEmployees(quali: qualification) : Promise<void> {
    await this.qualiService.getListOfEmployeesForQualification(quali).then(r => {
      this.listOfEmployees$ = r;
      if(typeof r.employees !== 'undefined'){
        this.allEmployees = r.employees;
        console.log(this.allEmployees[0]);
      }
    });
  }

  public add() : void{
     this.router.navigateTo('/quali-add');
  }

  public delete(): void{
     this.router.navigateTo('/quali-delete');
  }

}
