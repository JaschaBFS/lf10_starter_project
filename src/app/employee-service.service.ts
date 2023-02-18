import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {newEmployee} from "./newEmployee";
import {AddSkill} from "./addSkill";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  selectedEmployee: Employee;
  apiUrl = '/backend';
  private skillSet: string[];
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      skill : '',
    },
  };
  model = new newEmployee;
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.skillSet = [];
  }

  async getAllEmployees(){
    return new Promise<Employee[]>((resolve) => {
      this.http.get<Employee[]>('/backend').subscribe(employees$ =>{
        resolve(employees$);
      });
    })
  }
  async getEmployeeById(id : number) : Promise<Employee> {
      console.log(this.apiUrl + '/' + id + " wird aufgerufen");
      return new Promise<Employee>((resolve) =>{
        this.http.get<Employee>(this.apiUrl + '/' + id)
          .subscribe(employee$ =>{
            console.log("employee ist : " + employee$);
            resolve(employee$);
          });
      })
  }
  setSelectedEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  setEmployee(data:any) {
    this.skillSet.push(data.skillSet);
    console.log(this.skillSet);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skillSet);
    console.log(this.model);
    try{return new Promise((resolve) => {
      this.http.post<any>(this.apiUrl, this.model)
        .subscribe(
          employee$ => {
            console.log(employee$);
            resolve(employee$);
          }
        );
    })}catch (e){
      console.log(e as Error);
    }
    return null;
}
  updateEmployee(data: any){
    this.skillSet.push(data.skillset);
    console.log(this.skillSet);
    this.model = new newEmployee(data.lastName, data.firstName, data.street, data.postcode, data.city, data.phone, this.skillSet);
    try{return new Promise((resolve) => {
      this.http.put<any>(this.apiUrl + '/' + this.selectedEmployee.id, this.model)
        .subscribe(
          employee$ => {
            resolve(employee$);
          }
        );
    })}catch (e){
      console.log(e as Error);
    }
    return null;
  }
  deleteEmployee() {
      try {return new Promise((resolve) => {
        this.http.delete<any>(this.apiUrl + '/' + this.selectedEmployee.id).subscribe(employee$ =>{
          resolve(employee$);
        });
      })}
    catch (e){
      console.log(e as Error);
    }
    return null;
  }
  addQualificationToEmployee(id: number, skilltoAdd :string){
    try{
      let skill : AddSkill = new AddSkill(skilltoAdd);
      return new Promise((resolve) => {
        this.http.post<any>(this.apiUrl+'/'+id+'/qualifications',skill).subscribe(response$ =>{
          resolve(response$);
        })
      })
    }catch (e){
      console.log(e as Error);
    }
    return null;
  }
  removeQualificationFromEmployee(id: number, skilltoRemove:string){
    try{
      this.options.body.skill = skilltoRemove;
      return new Promise((resolve) => {
        this.http.delete<any>(this.apiUrl+'/'+id+'/qualifications',this.options).subscribe(response$ =>{
          resolve(response$);
        })
      })
    }catch (e){
      console.log(e as Error);
    }
    return null;
  }
}

