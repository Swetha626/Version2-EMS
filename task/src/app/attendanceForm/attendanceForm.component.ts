import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-attendanceForm',
  templateUrl: './attendanceForm.component.html',
  styleUrls: ['./attendanceForm.component.css']
})
export class AttendanceFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  attendForm=this.fb.group({
    taskname:[,[Validators.required]],
    owner:[,[Validators.required,Validators.minLength(3)]],
    time:[,[Validators.required]],
  })

  ngOnInit() {
  }

}
