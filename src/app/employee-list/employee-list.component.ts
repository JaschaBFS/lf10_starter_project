import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQ2NjI5OTQsImlhdCI6MTY3NDY1OTM5NCwianRpIjoiYTNjNjMwMzktNzJmNC00Y2I0LWFiNWUtMWJlMTc3MDdhMzkxIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI4NGYwZmM3OS01NDRhLTRmODktOTRkYS1iYjFiNGE4NmI4ZjEiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.FlaqxEXdNNqalpLSfarm4UZ5txNZThe-mkYQl_9K9PGvwKS-H6qB_3m--HtFhwFSHOC7memOf4-XUr1edLVdhaXpFim-30Nhk4yntvooblpBEg3bgd8MwTPny56ECe14paxYr4wwWnbKkU_Q2P2bwvRJNkqyCLJ74fyhpCevpqJEaaV34jR-HLS7vMdGGy6BxIszRIC2bi1DiuiM0zoPa3GnfpsKCpnx6ynnunzk8K0BrMmrGHQ2DrOx5ZkSL6iXciEnupop3DsjwD2Pv4p0bwYuaQNQL1mHFiXMKjx8N9Y_S9vavSOb95BVj-ukTzVzAi2q8dYaQg8t6Br_nXINpA';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
