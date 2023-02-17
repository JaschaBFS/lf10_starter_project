import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {qualification} from "./qualification";
import {Observable} from "rxjs";
import {AddSkill} from "./addSkill";


@Injectable({
  providedIn: 'root'
})

export class QualiServiceService {
  baseUrl : string = '/quali';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: {
      skill : '',
    },
  };
  selectedQuali: qualification;

  constructor(  private http: HttpClient) {
    this.selectedQuali = new qualification();
  }

  getListOfQualifications(): Observable<qualification[]> {
    return this.http.get<qualification[]>(this.baseUrl);
  }

  async getListOfEmployeesForQualification(quali: qualification) : Promise<qualification> {
    console.log('zugriff auf: ' + this.baseUrl + '/' + quali.skill + '/employees');
    return new Promise((resolve) => {
      this.http.get<qualification>(this.baseUrl + '/' + quali.skill + '/employees')
        .subscribe(
       quali$ => {
         this.selectedQuali = quali$;
        console.log(quali$);
        resolve(quali$);
      }
    );
    });
  }

  removeQualification(quali : qualification){
    try{
      if(typeof quali.skill === 'string'){
        this.options.body.skill = quali.skill;
        console.log(this.options);
      }
      return new Promise((resolve) => {
        this.http.delete<qualification>(this.baseUrl, this.options).subscribe(qual$ =>{
          resolve(qual$);
        });
      })
    }catch (e){
      console.log(e as Error);
    }
    return null;
  }
  addQualification(skill: AddSkill){
    try{
      return new Promise((resolve) =>{
        this.http.post<AddSkill>(this.baseUrl,skill).subscribe(skill$ =>{
          resolve(skill$);
        })
      })
    }catch(e){
      console.log(e as Error);
    }
    return null;
  }
  setSelectedQuali(quali: qualification){
    this.selectedQuali = quali;
  }
}

