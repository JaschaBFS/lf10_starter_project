import { Component,OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {qualification} from "../qualification";
import {Router} from "@angular/router";
import {QualiServiceService} from '../quali-service.service';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit{
  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzUxNzA5NzcsImlhdCI6MTY3NTE2NzM3NywianRpIjoiN2ZmYjA3YjctMmQxYy00Zjg0LWEyOGItMjI2NDgwNjE5ZDNjIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJmMjlkZTE0Yy0yNmRkLTRhNDUtYTIwMC02ODkwOWM1YjM4ZjIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.YmlwL0jJ2kC85HJGIj5ByPb4XS_R-iuVYK7BscpkiZcPOvsB5tMhGWxObL3tefIT6P6WCJm_9l8yIDo_BOuyxuRdHn7iOFFCDF2X7YP0ypUU-F6Gjbw0qmfbD63BJN2mlMLn3yP1oqESn31BxB-beq0JHIcTh-fZ1Ca2-wRkox4Yd5xY9YZfjtDCVSoGXKlAgFWchNZKjGiLu5Q8bqVm_g_N-M1yljyrOcb6fohIbKbuPS8mGJGapJ6sSavi1VIL7vFnEqL3hanfcz4BmFfF9uwox6kuPWUvMfbNNq428HbdH-gGBhSnWfi2JSJ6FkRY8w3WhghvjnSgrFkPr5d6eQ';
  qualification$: Observable<qualification[]>;

  constructor( private router: Router, private qualiService: QualiServiceService) {
    this.qualification$ = of([]);
  }

  ngOnInit(): void{
    this.getQualifications();
  }

  getQualifications() : void{
    this.qualification$ = this.qualiService.getListOfQualifications();
  }

  onClick(quali : qualification):void{
    this.qualiService.setSelectedQuali(quali);
    this.router.navigate(['/quali-detail']);
    console.log(quali);
  }


}
