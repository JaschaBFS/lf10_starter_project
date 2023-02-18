import {Component, OnInit} from '@angular/core';
import {QualiServiceService} from "../quali-service.service";
import {AppRoutingService} from "../app-routing.service";
import {EmployeeServiceService} from "../employee-service.service";
import {Employee} from "../Employee";
import {SelectionModel} from "@angular/cdk/collections";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-add-quali-to-employee',
  templateUrl: './add-quali-to-employee.component.html',
  styleUrls: ['./add-quali-to-employee.component.css']
})
export class AddQualiToEmployeeComponent implements OnInit{
  employeesToAdd : Employee[] = [];
  displayedColumns : string[] = ['id','lastName','firstName','select'];
  selection = new SelectionModel<Employee>(true,[]);
  constructor(private qualiService: QualiServiceService,private router: AppRoutingService, private employeeService: EmployeeServiceService) {
  }
  async ngOnInit() {
    if(this.qualiService.selectedQuali.employees !== undefined){
      await this.employeeService.getAllEmployees().then(r => {
        this.employeesToAdd = this.filterEmployeesForQualification(r);
      });
    }
  }
  private filterEmployeesForQualification(employees:Employee[]): Employee[]{
    let employeesWOCurrentQuali : Employee[] = [];
    for(let employee of employees){
      if(employee.skillSet !== undefined){
        let hasSkill = false;
        for(let skill of employee.skillSet){
          if(skill === this.qualiService.selectedQuali.skill){
            hasSkill = true;
            break;
          }
        }
        if(!hasSkill){
          employeesWOCurrentQuali.push(employee);
        }
      }
    }
    return employeesWOCurrentQuali;
  }
  public onToggleEmployee(employee : Employee){
    this.selection.toggle(employee);
    console.log(this.selection.selected);
  }

  public addSkillToEmployees(){
    for(let employee of this.selection.selected){
      if(employee.id !== undefined && this.qualiService.selectedQuali.skill !== undefined){
        this.employeeService.addQualificationToEmployee(employee.id,this.qualiService.selectedQuali.skill);
      }
    }
  }
}
