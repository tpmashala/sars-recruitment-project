import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeInformationComponent } from './pages/employee-information/employee-information.component';
import { EmployeesListComponent } from './pages/employees-list/employees-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewEmployeeDetailsComponent } from './pages/view-employee-details/view-employee-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeInformationComponent },
  { path: 'emplist', component: EmployeesListComponent },
  { path: 'editemployee', component: ViewEmployeeDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
