import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-Emp_WorkStatus',
  templateUrl: './Emp_WorkStatus.component.html',
  styleUrls: ['./Emp_WorkStatus.component.css']
})
export class Emp_WorkStatusComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  getTask:any='';

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/WorkForm").subscribe(data1=>{
      this.getTask=data1;
    })
  }
  workForm=this.fb.group({
    status:[,[Validators.required]],
    totalTime:[,[Validators.required]],
    text:[,[Validators.required]],
  })

  send(item:any)
  {
    if(this.workForm.valid)
    {
      alert("Work Status Submitted successfully");
      this.db(item);

    }
  }

  db(item:any){
    var body={
      status:this.workForm.value.status,
      totalTime:this.workForm.value.totalTime,
      text:this.workForm.value.text

    }
    this.http.patch<any>("http://localhost:3000/WorkForm/"+item.id,body).subscribe(data=>{

    })
  }
 

}
