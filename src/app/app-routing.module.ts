import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import{QualificationComponent} from "./qualification/qualification.component";
import{QualificationDetailComponent} from "./qualification-detail/qualification-detail.component";
import {AuthGuard} from "./utility/app.guard";
import {ExistingEmployeeFormComponent} from "./employee-form/existing-employee-form";
import {NewEmployeeFormComponent} from "./employee-form/new-employee-form.components";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent,canActivate:[AuthGuard]},
  {path: 'quali', component: QualificationComponent,canActivate:[AuthGuard]},
  {path: 'quali-detail', component: QualificationDetailComponent,},
  {path: 'updateEmployee', component: ExistingEmployeeFormComponent},
  {path: 'newEmployee', component: NewEmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
