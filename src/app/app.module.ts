import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LogoComponent } from './common/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { MatIconModule } from '@angular/material';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EmployeeCreateEditComponent } from './components/employee-create-edit/employee-create-edit.component';
import { LoaderComponent } from './common/loader/loader.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TaskCreateEditComponent } from './components/task-create-edit/task-create-edit.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { WorklogCreateEditComponent } from './components/worklog-create-edit/worklog-create-edit.component';
import { TaskViewEditComponent } from './pages/task-view-edit/task-view-edit.component';
import { ProfileIconComponent } from './common/profile-icon/profile-icon.component';
import { SecondsToLogTimePipe } from './pipes/seconds-to-log-time.pipe';
import { ConfirmationPopupComponent } from './common/confirmation-popup/confirmation-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    LogoComponent,
    SideNavComponent,
    EmployeeComponent,
    EmployeeCreateEditComponent,
    LoaderComponent,
    TaskListComponent,
    TaskCreateEditComponent,
    WorklogCreateEditComponent,
    TaskViewEditComponent,
    ProfileIconComponent,
    SecondsToLogTimePipe,
    ConfirmationPopupComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSlideToggleModule,
    ToasterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmationPopupComponent
  ]
})
export class AppModule { }
