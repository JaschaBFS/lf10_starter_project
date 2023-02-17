import { Component } from '@angular/core';
import {QualiServiceService} from "../quali-service.service";
import {qualification} from "../qualification";

@Component({
  selector: 'app-qualification-delete',
  templateUrl: './qualification-delete.component.html',
  styleUrls: ['./qualification-delete.component.css']
})
export class QualificationDeleteComponent {
  constructor(private qualiservice: QualiServiceService) {
  }

  public delete(){
    this.qualiservice.removeQualification(this.qualiservice.selectedQuali);
    //this.qualiservice.setSelectedQuali(new qualification());
  }
}
