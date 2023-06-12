import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Validators,PatternValidator} from '@angular/forms';
@Component({
  selector: 'app-Admin_Notification',
  templateUrl: './Admin_Notification.component.html',
  styleUrls: ['./Admin_Notification.component.css']
})
export class Admin_NotificationComponent implements OnInit {

  constructor(private http:HttpClient,private fb:FormBuilder) { }
  addForm=this.fb.group({
    role:[,[Validators.required]],
    skills:[,[Validators.required]],
    exp:[,[Validators.required]],
salary:[,[Validators.required]]
  })
  status:boolean=false;
  add(){
    this.status=!this.status;
  }
  addJob(){
    if(this.addForm.valid){
      alert("Successfully added");
      this.postJob();
    }
  }
  close(){
    this.status=false;
  }
  postJob(){
    var body={
      role:this.addForm.value.role,
      skills:this.addForm.value.skills,
      exp:this.addForm.value.exp,
      salary:this.addForm.value.salary,
    }
      this.http.post<any>("http://localhost:3000/JobOpenings",body).subscribe(data=>{
  })
  }
getJava:any="";
getUI:any="";
getJFS:any="";
getAT:any="";
getTL:any="";
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/JavaDeveloper").subscribe(value1=>{
      this.getJava=value1;
    });
    this.http.get<any>("http://localhost:3000/UIDeveloper").subscribe(value2=>{
      this.getUI=value2;
    });
    this.http.get<any>("http://localhost:3000/JavaFullStackDeveloper").subscribe(value3=>{
      this.getJFS=value3;
    });
    this.http.get<any>(" http://localhost:3000/AutomationTester").subscribe(value4=>{
      this.getAT=value4;
    });
    this.http.get<any>("  http://localhost:3000/TechnicalLead").subscribe(value5=>{
      this.getTL=value5;
    });
  }
}
