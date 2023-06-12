import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceFormComponent } from '../attendanceForm/attendanceForm.component';
@Component({
  selector: 'app-Admin_Attendance',
  templateUrl: './Admin_Attendance.component.html',
  styleUrls: ['./Admin_Attendance.component.css']
})
export class Admin_AttendanceComponent implements OnInit {

  constructor(private dia:MatDialog) { }
  openForm(){
    this.dia.open(AttendanceFormComponent);
  }
  ngOnInit() {
  }

}
