import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

const routes: Routes = [
  {path: 'create', component: EmployeeRegisterComponent},
  {path: 'list', component: EmployeeAllComponent},
  {path: 'edit/:id', component: EmployeeEditComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
