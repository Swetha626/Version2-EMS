import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { AboutComponent } from './About/About.component';
import { CultureComponent } from './Culture/Culture.component';
import { OpeningsComponent } from './Openings/Openings.component';
import { LoginComponent } from './Login/Login.component';
import { Service_PageComponent } from './Service_Page/Service_Page.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPassComponent } from './ForgotPass/ForgotPass.component';
import { Emp_HomeComponent } from './Emp_Home/Emp_Home.component';
import { Emp_AttendanceComponent } from './Emp_Attendance/Emp_Attendance.component';
import {HttpClientModule} from '@angular/common/http';
import { Admin_HomeComponent } from './Admin_Home/Admin_Home.component';
import { Admin_HeaderComponent } from './Admin_Header/Admin_Header.component';
import { Admin_DashboardComponent } from './Admin_Dashboard/Admin_Dashboard.component';
import { Admin_leaveComponent } from './Admin_leave/Admin_leave.component';
import { Admin_DetailsComponent } from './Admin_Details/Admin_Details.component';
import { Admin_AttendanceComponent } from './Admin_Attendance/Admin_Attendance.component';
import { Admin_WorkComponent } from './Admin_Work/Admin_Work.component';
import { Add_EmpComponent } from './Add_Emp/Add_Emp.component';
import { RegisterComponent } from './Register/Register.component';
import { Emp_LeaveComponent } from './Emp_Leave/Emp_Leave.component';
import { Emp_WorkStatusComponent } from './Emp_WorkStatus/Emp_WorkStatus.component';
import { Emp_SalaryComponent } from './Emp_Salary/Emp_Salary.component';





@NgModule({
  declarations: [												
    AppComponent,
      HomeComponent,
      AboutComponent,
      CultureComponent,
      OpeningsComponent,
      LoginComponent,
      Service_PageComponent,
      HeaderComponent,
      FooterComponent,
      ForgotPassComponent,
      Emp_HomeComponent,
      Emp_AttendanceComponent,
      Admin_HomeComponent,
      Admin_HeaderComponent,
      Admin_DashboardComponent,
      Admin_leaveComponent,
      Admin_DetailsComponent,
      Admin_AttendanceComponent,
      Admin_WorkComponent,
      Add_EmpComponent,
      RegisterComponent,
      Emp_LeaveComponent,
      Emp_WorkStatusComponent,
      Emp_SalaryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
