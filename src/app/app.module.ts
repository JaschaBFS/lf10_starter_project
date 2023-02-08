import {NgModule,APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { QualificationComponent } from './qualification/qualification.component';
import { QualificationDetailComponent } from './qualification-detail/qualification-detail.component';
import {FormsModule} from "@angular/forms";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./utility/app.init";
import { EmployeeFormComponent } from './employee-form/employee-form.components';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    QualificationComponent,
    QualificationDetailComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
