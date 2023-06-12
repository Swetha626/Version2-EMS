import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Admin_leave',
  templateUrl: './Admin_leave.component.html',
  styleUrls: ['./Admin_leave.component.css']
})
export class Admin_leaveComponent implements OnInit {

  constructor(private http:HttpClient) { }
getLeave:any="";
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/leaveForm").subscribe(value=>{
      this.getLeave=value;
    });
  }
  approve(item:any){
    alert("Leave Accepted")
    var body={
      "empName":item.username,
      "empMobile":item.mobile,
      "empReason":item.reason,
      "Status":"Leave Approved"
    }
    this.http.post<any>("http://localhost:3000/Approve",body).subscribe(data=>{
      alert("Updated in DB");
    })
  }
}
