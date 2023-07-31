import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { Validators , PatternValidator} from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent {
constructor(private fb:FormBuilder, private http:HttpClient,@Inject(MAT_DIALOG_DATA) public editData:any){}
taskForm=this.fb.group({
  taskname:[,[Validators.required]],
  owner:[,[Validators.required,Validators.minLength(3)]],
  time:[,[Validators.required]],
})

task(){
  if(this.taskForm.valid){
    alert("Task Assigned Successfully");
    this.db();
    this.taskForm.reset();

  }
}
db(){
  var body={
  taskname:this.taskForm.value.taskname,
  owner:this.taskForm.value.owner,
  time:this.taskForm.value.time
}
this.http.post<any>("http://localhost:3000/WorkForm",body).subscribe(data=>{

})
}


}
