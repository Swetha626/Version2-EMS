import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-Admin_Attendance',
  templateUrl: './Admin_Attendance.component.html',
  styleUrls: ['./Admin_Attendance.component.css']
})
export class Admin_AttendanceComponent implements OnInit {

  constructor(private http:HttpClient) { }
getStatus:any='';
  ngOnInit() {
    this.http.get<any>(environment.empAttendance).subscribe(data=>{
      this.getStatus=data;
    })

  }

}
