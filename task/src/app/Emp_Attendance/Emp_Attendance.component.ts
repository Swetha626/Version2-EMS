import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, map, subscribeOn } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-Emp_Attendance',
  templateUrl: './Emp_Attendance.component.html',
  styleUrls: ['./Emp_Attendance.component.css']
})
export class Emp_AttendanceComponent implements OnInit {
  present!:boolean;
  excused!:boolean;
  wfh!:boolean;
  getAttendance:any='';
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
if(hour==9 && min>=30 && min<=45 && time=='AM'){
this.present=true;
}
if(hour==9 && min>=46 && min<=59 && time=='AM'){

  this.excused=true;
}
if(hour==10 && min>=1 && min<=30 && time=='AM'){
  this.wfh=true;
}
  })}
  attendanceForm=this.fb.group({

    post:[,[Validators.required]],

})

loginID:any;
currentDate!: Date;
check:boolean=false; //for loop
todayStatus:any="";

  ngOnInit() {


    const sessionUser = sessionStorage.getItem('nameID');
    if (sessionUser) {
      this.loginID = JSON.parse(sessionUser);
    }
    this.currentDate = new Date();

   this.search().subscribe(data=>{
    this.getAttendance=data;
    for(let index=0; this.getAttendance.length;index++){
      if(this.getAttendance[index].date===this.today)
      {
        this.check=true;
      }


     }
   })
this.http.get<any>(environment.empAttendance).subscribe(data=>{
  var details=data.find((item:any)=>{
    return item.username===this.loginID.userName && item.date===this.today
  })
  if(details){
    this.todayStatus=details;

  }
})
  }

  search(): Observable<any> {
    return this.http.get<any>(environment.empAttendance).pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.username===this.loginID.userName
        );
      })
    );
  }

db(){
  // var date=new Date().toLocaleDateString();
  // var day=new Date().getDay();
   var body={
  "username":this.loginID.userName,
  "date":'',
  "status":this.attendanceForm.value.post
}
this.http.post<any>(environment.empAttendance,body).subscribe(data=>{

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

}
