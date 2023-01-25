import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {qualification} from "../qualification";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzI3NjgxMDgsImlhdCI6MTY3Mjc2NDUwOCwianRpIjoiNGIyYmIwYjMtOTFiZS00MGRjLTkyMjQtNmMxY2ZlYzJiZTc2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIxN2I4MmNlYi1mZDQ3LTQzYjAtODBlYy0xNTRlYzk5N2VhNDMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.RwEfHQDiwzTXlvSma4HnRLMWpYORppIdugZFpJ1RpGIvT-xvY2vc6HlMjsIs36euYCMTZOd51x1Y8EJATEfzXiYNtef980DGlIbnX_vhLirA08FVJnkDSHt1YHfEjhYOMOY9DrsuIFkim80NaPPb1aNVFQ1PNNw_CZ7TLsnrPoO0oXCqKMH2tLUo-SgTablRsK30qJ4HzP58AHkmr0fyqSbwbu1il73ngxJ4JCfKgtYm8-F8O2KbHECOom9Q5O5ZSYPDKCNiVylbzrtdHGFpmOvgq5ZURIQk9qDexKcaEEoOr8YiIjDbqh1zNF-OpIeN8PnU2WFyU3XuaTQihjZDbg';
  qualification$: Observable<qualification[]>;

  constructor(private http: HttpClient) {
    this.qualification$ = of([]);
  }

  fetchData() {
    this.qualification$ = this.http.get<qualification[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
