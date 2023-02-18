import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import{QualificationComponent} from "./qualification/qualification.component";
import{QualificationDetailComponent} from "./qualification-detail/qualification-detail.component";
import {AuthGuard} from "./utility/app.guard";
import {ExistingEmployeeFormComponent} from "./employee-form/existing-employee-form";
import {NewEmployeeFormComponent} from "./employee-form/new-employee-form.components";
import {QualificationAddComponent} from "./qualification-add/qualification-add.component";
import {QualificationDeleteComponent} from "./qualification-delete/qualification-delete.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import {AddQualiToEmployeeComponent} from "./add-quali-to-employee/add-quali-to-employee.component";
import {
  RemoveQualificationFromEmployeeComponent
} from "./remove-qualification-from-employee/remove-qualification-from-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeListComponent,canActivate:[AuthGuard]},
  {path: 'quali', component: QualificationComponent,canActivate:[AuthGuard]},
  {path: 'quali-detail', component: QualificationDetailComponent,},
  {path: 'update-employee', component: ExistingEmployeeFormComponent},
  {path: 'new-employee', component: NewEmployeeFormComponent},
  {path: 'quali-add', component: QualificationAddComponent},
  {path: 'quali-delete', component: QualificationDeleteComponent},
  {path: 'employee-detail', component: EmployeeDetailComponent},
  {path: 'employee-add-quali', component: AddQualiToEmployeeComponent},
  {path: 'employee-remove-quali', component: RemoveQualificationFromEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
