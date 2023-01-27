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
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQ4MDczMDksImlhdCI6MTY3NDgwMzcwOSwianRpIjoiYzBmNGNlZTgtZTU1NC00N2U4LWJhY2UtNTY5Zjc4NzQxNzhjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkZjY4OGMyOS1hZjE0LTRkMmUtOGMwNy0yNWVhNjBiNjMxY2EiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.fSbRKxj9ShsrvsudykDx6ruH1SYWnGXHu-q5_Y-V1wDsu5UwTFuLQW42JGD36xFYJYKyT99Hu-eVRX92myKWkFeGFBMyHWKu2dpB_PB-NFk7PpjQ26MRC7bBvsOtVx85Z65w5AKc0YMzvW44-nxVS33KKN7vJEeuU-HvKkZUxggPVS3e_1NFtsmS3mctc0cVCc31KlTyqkcQ9KAwd31z0UNOENHriDaO2pOgfVVqO5rQztlTQHZpyCm2MGZSiq1sjunGkJvgJngzm-z7Y7wP_ON984m6BJYaBWovz86CrgKm1yUwZXp6M63IRHmCIwcnLJrrT55Z-0xR04_Luub77g';
  qualification$: Observable<qualification[]>;

  constructor(private http: HttpClient) {
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

}
