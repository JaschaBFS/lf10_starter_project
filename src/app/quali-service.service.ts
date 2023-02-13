import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {qualification} from "./qualification";
import {Observable, takeUntil} from "rxjs";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})


export class QualiServiceService {
  baseUrl : string = '/quali';
  selectedQuali: qualification;

  currentURl : string ="";

  constructor( private router: Router, private http: HttpClient) {
    this.selectedQuali = new qualification();
  }

  navigateTo(URL : string) : void{
    this.router.navigate([URL]);
    this.currentURl = URL;
  }

  refresh(){

    location.reload();
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

  removeQualification(quali : qualification): Observable<qualification>{
    return this.http.delete<qualification>(this.baseUrl);
  }
  addQualification(quali : qualification) : Observable<qualification>{
    return this.http.post<qualification>(this.baseUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }
  setSelectedQuali(quali: qualification){
    this.selectedQuali = quali;
  }
}

