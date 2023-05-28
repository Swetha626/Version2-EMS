import { Component } from '@angular/core';
import { Validators , PatternValidator} from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent {
constructor(private fb:FormBuilder){}
taskForm=this.fb.group({
  taskname:[,[Validators.required]],
  owner:[,[Validators.required,Validators.minLength(3)]],
  time:[,[Validators.required]],
salary:[,[Validators.required]]
})
status:boolean=false;
task(){
  if(this.taskForm.valid){
    this.status=!this.status;
    alert("Task Assigned Successfully");

  }
}
}
