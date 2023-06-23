import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-Emp_Attendance',
  templateUrl: './Emp_Attendance.component.html',
  styleUrls: ['./Emp_Attendance.component.css']
})
export class Emp_AttendanceComponent implements OnInit {
  present!:boolean;
  excused!:boolean;
  today=new Date().toLocaleDateString();
  constructor(private fb:FormBuilder,private http:HttpClient) {setInterval(()=>{
    var data=new Date();
    var hour=data.getHours();
    var week=data.getDay();
    var min=data.getMinutes();
    var time='';
    if(hour>=12){
      time='PM';
    }
    else{
      time='AM';
    }
    if(hour>12){
      hour=hour-12;
    }
// if(week==6 || week==7){
//   this.post=false;
// }
if(hour==9 && min>=30 && min<=45 && time=='AM'){
this.present=true;
}
if(hour==9 && min>=46 && min<=59 && time=='AM'){

  this.excused=true;
}
  })}
  attendanceForm=this.fb.group({

    post:[,[Validators.required]],

})

loginID:any;
currentDate!: Date;
// currentDay!:string |null;

  ngOnInit() {


    const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
    }
    this.currentDate = new Date();
    // this.currentDay = this.datePipe.transform(this.currentDate, 'EEEE');
    this.http.get<any>("http://localhost:3000/Attendance").subscribe(data=>{
      const status=data.find((p:any)=>{
        return p.username===this.loginID.userName
      });
      if(status){
        this.getAttendance=status;
      }
    })
  }
db(){
  var date=new Date().toLocaleDateString();
  var day=new Date().getDay();
   var body={
  "username":this.loginID.userName,
  "date":date,
  "status":this.attendanceForm.value.post
}
this.http.post<any>("http://localhost:3000/Attendance",body).subscribe(data=>{

  })
}
sub(){
  if(this.attendanceForm.valid){
    alert("Attendance posted");
    this.db();
  }

}
show:boolean=false;
view(){
  this.show=true;
  }
  getAttendance:any='';

}
