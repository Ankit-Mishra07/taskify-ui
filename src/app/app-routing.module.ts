import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { EmployeeComponent } from './pages/employee/employee.component';
import { TaskViewEditComponent } from './pages/task-view-edit/task-view-edit.component';
import { WorklogReportComponent } from './pages/worklog-report/worklog-report.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: []
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'task/:id',
    component: TaskViewEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'logreport',
    component: WorklogReportComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
