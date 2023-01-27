import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {qualification} from "../qualification";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQ4MzI2NzgsImlhdCI6MTY3NDgyOTA3OCwianRpIjoiZDMyNGQxOGQtMTkwYS00ZDUzLWEyOWUtYzM4YjNjNTc0Yjk0IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI4ZDRkMzljMS05MWYzLTQ2MzQtOTVkMi03YzlkOTcxMzJiOTgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.L14-nfwBfiw6YyB6tflyouTJlk3yk0_WJXtmjSXfMZqmT_vc2Au4tFqsNtFjDOoOnqNJAi2Tod8J5QN5tUzRpU3kDBqzWRxtzKHd3yxDADzIjdg0D_H5qDeibO1J8tiBZIogprX0h5Ns0o1ozX4cYg2sc5wDvY5L1oBtAWbaReGhbbxwAU7D1fWLhh4lNOdjJ9Q91PNuLrNgzQWe5CIALgmLY-ufOhvlVhj3XCLAOgiDK4R8UKNiS8lYjxQB8aVpfV0VEe61Cxmw0LaajKBzfq2d8WcjoWDwtxzTIGLWkV9EJYGFPUlIRQ-Ao_Zr_Or5OC6jh0I-VKtNKvJ7-Mr1MA';
  qualification$: Observable<qualification[]>;

  constructor(private http: HttpClient, private router: Router) {
    this.qualification$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.qualification$ = this.http.get<qualification[]>('/quali', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  onClick(quali : qualification):void{
    this.router.navigate(['/quali-detail']);
  }


}
