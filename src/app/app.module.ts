import {NgModule,APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { QualificationComponent } from './qualification/qualification.component';
import { QualificationDetailComponent } from './qualification-detail/qualification-detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./utility/app.init";
import { NewEmployeeFormComponent } from './employee-form/new-employee-form.components';
import { ExistingEmployeeFormComponent } from './employee-form/existing-employee-form';
import {QualificationAddComponent} from "./qualification-add/qualification-add.component";
import { QualificationDeleteComponent } from './qualification-delete/qualification-delete.component';
import { AddQualiToEmployeeComponent } from './add-quali-to-employee/add-quali-to-employee.component';
import { RemoveQualificationFromEmployeeComponent } from './remove-qualification-from-employee/remove-qualification-from-employee.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    QualificationComponent,
    QualificationDetailComponent,
    EmployeeDetailComponent,
    NewEmployeeFormComponent,
    ExistingEmployeeFormComponent,
    QualificationAddComponent,
    QualificationDeleteComponent,
    AddQualiToEmployeeComponent,
    RemoveQualificationFromEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
