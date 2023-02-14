import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {QualiServiceService} from "../quali-service.service";
import {AddSkill} from "../addSkill";

@Component({
  selector: 'app-qualification-add',
  templateUrl: './qualification-add.component.html',
  styleUrls: ['./qualification-add.component.css']
})
export class QualificationAddComponent {
    skill = new FormControl('');
    constructor(private qualiservice: QualiServiceService) {
    }

    public add(){
      var newQuali;
      if(this.skill.value === null){
        newQuali = new AddSkill('');
      }else{
        newQuali = new AddSkill(this.skill.value);
      }
      this.qualiservice.addQualification(newQuali);
    }
}
