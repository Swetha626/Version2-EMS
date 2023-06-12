import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Emp_Attendance',
  templateUrl: './Emp_Attendance.component.html',
  styleUrls: ['./Emp_Attendance.component.css']
})
export class Emp_AttendanceComponent implements OnInit {

  constructor() {setInterval(()=>{
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
if(hour==8 && min>=30 && min<=45 && time=='AM'){
this.hide=false;
}

  })}
hide:any;


  ngOnInit() {
  }

}
