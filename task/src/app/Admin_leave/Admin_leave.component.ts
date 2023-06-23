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
      "username":item.username,
      "tlname":item.tlname,
      "dept":item.deptname,
      "leave":item.leaveDate,
      "return":item.returnDate,
      "Status":"Leave Approved"
    }
    var body2={
      "Status":"Leave Approved"
    }
    this.http.get<any>("http://localhost:3000/leaveForm").subscribe(data1=>{
      const status=data1.find((a:any)=>{
        return a.username===item.username
      })
      if(status){
        this.http.patch<any>("http://localhost:3000/leaveForm/"+status.id,body2).subscribe(()=>{
          alert("patched")
        })
        this.http.post<any>("http://localhost:3000/LeaveStatus",body).subscribe(data=>{
          alert("approved");
          this.ngOnInit();

      })
      }
    })

  }
  cancel(item:any){
    alert("Leave Cancelled")
    var body={
      "username":item.username,
      "tlname":item.tlname,
      "dept":item.deptname,
      "leave":item.leaveDate,
      "return":item.returnDate,
      "Status":"Leave Cancelled"
    }

    var body2={
      "Status":"Leave Cancelled"
    }
    this.http.get<any>("http://localhost:3000/leaveForm").subscribe(data1=>{
      const status=data1.find((a:any)=>{
        return a.username===item.username && a.leaveDate===item.leaveDate
      })
      if(status){
        this.http.patch<any>("http://localhost:3000/leaveForm/"+status.id,body2).subscribe(()=>{
          alert("patched")
        })
        this.http.post<any>("http://localhost:3000/LeaveStatus",body).subscribe(data=>{
          alert("cancelled");
          this.ngOnInit();

      })
      }
    })

  }
}
