import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
@Component({
  selector: 'app-Emp_Leave',
  templateUrl: './Emp_Leave.component.html',
  styleUrls: ['./Emp_Leave.component.css']
})
export class Emp_LeaveComponent {
  constructor(private fb:FormBuilder){}

  leaveForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    tlname:[,[Validators.required,Validators.minLength(3)]],
    deptname:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    leaveDate:[,[Validators.required]],
    returnDate:[,[Validators.required]],
    reason:[,[Validators.required]]




})
status:boolean=true;

others(){
this.status=false;
  alert(this.leaveForm.value.reason);
}
  selectedOption!: number;
  textBoxValue!: string;

selectOption(option: number) {
  this.selectedOption = option;
}
}
