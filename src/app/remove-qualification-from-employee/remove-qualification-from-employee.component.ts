import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {SelectionModel} from "@angular/cdk/collections";
import {QualiServiceService} from "../quali-service.service";
import {AppRoutingService} from "../app-routing.service";
import {EmployeeServiceService} from "../employee-service.service";

@Component({
  selector: 'app-remove-qualification-from-employee',
  templateUrl: './remove-qualification-from-employee.component.html',
  styleUrls: ['./remove-qualification-from-employee.component.css']
})
export class RemoveQualificationFromEmployeeComponent implements OnInit{
  employeesToRemove : Employee[] = [];
  displayedColumns : string[] = ['id','lastName','firstName','select'];
  selection = new SelectionModel<Employee>(true,[]);
  constructor(private qualiService: QualiServiceService,private router: AppRoutingService, private employeeService: EmployeeServiceService) {
  }
  ngOnInit() {
    if(this.qualiService.selectedQuali.employees !== undefined){
      this.employeesToRemove = this.qualiService.selectedQuali.employees;
    }
  }
  public onToggleEmployee(employee : Employee){
    this.selection.toggle(employee);
    console.log(this.selection.selected);
  }
  public async removeSkillFromEmployees(){
    for(let employee of this.selection.selected){
      if(employee.id !== undefined && this.qualiService.selectedQuali.skill !== undefined){
        await this.employeeService.removeQualificationFromEmployee(employee.id,this.qualiService.selectedQuali.skill);
      }
    }
  }
}
