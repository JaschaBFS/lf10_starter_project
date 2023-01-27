import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { QualificationComponent } from './qualification/qualification.component';
import { QualificationDetailComponent } from './qualification-detail/qualification-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    QualificationComponent,
    QualificationDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
