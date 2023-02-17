import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppRoutingService {
  constructor(private router: Router) {
  }
  navigateTo(URL : string) : void {
    this.router.navigate([URL]);
  }
}
