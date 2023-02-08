import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {qualification} from "./qualification";
import {Observable} from "rxjs";
import {Employee} from "./Employee";


@Injectable({
  providedIn: 'root'
})


export class QualiServiceService {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzUxNzk2MTYsImlhdCI6MTY3NTE3NjAxNiwianRpIjoiMWRkMGJhOGQtNjZlNS00OWJjLTk5ODMtMjIyMmFhNjE5YWNjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJiZjdhNzBhZC1jY2U3LTQyOTItYTM1ZC03MjMwMzk1NGFjZjAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.aOazQzSMVdBo-QOlihuUaaAoTY4gKUMAYvnMG3xH6pr9vYMlgZOieM5jYEdX_mbIeMkjONBclHT5ECocyAfinjSn_8Tb2RsOt5FfRkqD1yzn-wWNYBxRn1JEndVJWEkOYvRKTE4msE5Gd5ZoIMrqfaywG-KtCogsqHqK0HAfVcJBF2SnPkZx49Z5Ko-MXwONhVWt1ZysoSjHcqH9Zx6HqWiYiRmTMhr0lpLp_iLKSaqd0m4YRYseJTG44NPK45a4oLV1b_40rplsqCGloZlzScUHt4LyTXpWYGzNo_zb1J-gDBdMTJdKeQYu3DmxJucpfn2ZYHzzsLZIRAcSBOpK9w';
  baseUrl : string = '/quali';
  selectedQuali: qualification;


  constructor(private http: HttpClient) {
    this.selectedQuali = new qualification();
  }
  getListOfQualifications(): Observable<qualification[]> {
    return this.http.get<qualification[]>(this.baseUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  getListOfEmployeesForQualification(quali: qualification) : Observable<Employee[]> {
    console.log('zugriff auf: ' + this.baseUrl+'/'+quali.skill+'/employees');
    return this.http.get<Employee[]>(this.baseUrl+'/'+quali.skill+'/employees', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  removeQualification(quali : qualification): Observable<qualification>{
    return this.http.delete<qualification>(this.baseUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
  addQualification(quali : qualification) : Observable<qualification>{
    return this.http.post<qualification>(this.baseUrl, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }
  setSelectedQuali(quali: qualification){
    this.selectedQuali = quali;
  }
}

