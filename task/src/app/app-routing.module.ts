import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { CultureComponent } from './Culture/Culture.component';
import { Emp_AttendanceComponent } from './Emp_Attendance/Emp_Attendance.component';
import { ForgotPassComponent } from './ForgotPass/ForgotPass.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { OpeningsComponent } from './Openings/Openings.component';

import { Service_PageComponent } from './Service_Page/Service_Page.component';
import { Emp_HomeComponent } from './Emp_Home/Emp_Home.component';
import { Admin_HomeComponent } from './Admin_Home/Admin_Home.component';
import { RegisterComponent } from './Register/Register.component';
import { Emp_LeaveComponent } from './Emp_Leave/Emp_Leave.component';
import { Emp_WorkStatusComponent } from './Emp_WorkStatus/Emp_WorkStatus.component';
import { Emp_SalaryComponent } from './Emp_Salary/Emp_Salary.component';

const routes: Routes = [
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"About",
    component:AboutComponent
  },
  {
    path:"Culture",
    component:CultureComponent
  },
  {
    path:"Openings",
    component:OpeningsComponent
  },
  {
    path:"Service_Page",
    component:Service_PageComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"ForgotPass",
    component:ForgotPassComponent

  },
  {
    path:"Register",
    component:RegisterComponent
  },

  {
    path:"Emp-Page",
    component:Emp_HomeComponent

  },
  {
    path:"Emp_Attendance",
    component:Emp_AttendanceComponent
  },
  {
    path:"Emp_Leave",
    component:Emp_LeaveComponent
  },
  {
    path:"Emp_WorkStatus",
    component:Emp_WorkStatusComponent
  },
  {
    path:"Emp_salary",
    component:Emp_SalaryComponent
  },
  {
    path:"Admin-Page",
    component:Admin_HomeComponent
  },


  {
    path:"",
    component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
