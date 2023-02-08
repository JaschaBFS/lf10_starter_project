import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import{QualificationComponent} from "./qualification/qualification.component";
import{QualificationDetailComponent} from "./qualification-detail/qualification-detail.component";
import {AuthGuard} from "./utility/app.guard";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent,canActivate:[AuthGuard]},
  {path: 'quali', component: QualificationComponent,canActivate:[AuthGuard]},
  {path: 'quali-detail', component: QualificationDetailComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
