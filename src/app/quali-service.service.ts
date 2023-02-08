import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {qualification} from "./qualification";
import {Observable} from "rxjs";
import {Employee} from "./Employee";


@Injectable({
  providedIn: 'root'
})


export class QualiServiceService {
  baseUrl : string = '/quali';
  selectedQuali: qualification;


  constructor(private http: HttpClient) {
    this.selectedQuali = new qualification();
  }
  getListOfQualifications(): Observable<qualification[]> {
    return this.http.get<qualification[]>(this.baseUrl);
  }

  getListOfEmployeesForQualification(quali: qualification) : void//Observable<qualification>
  {
    console.log('zugriff auf: ' + this.baseUrl+'/'+quali.skill+'/employees');
    console.info(this.http.get<JSON>('http://localhost:8089/qualifications/Java/employees'));
    var qualiEmployees = this.http.get<qualification>(this.baseUrl + '/' + quali.skill + '/employees');
    qualiEmployees.subscribe();
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

