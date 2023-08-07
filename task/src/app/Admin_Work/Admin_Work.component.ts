import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkFormComponent } from '../work-form/work-form.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Admin_Work',
  templateUrl: './Admin_Work.component.html',
  styleUrls: ['./Admin_Work.component.css']
})
export class Admin_WorkComponent implements OnInit {

  constructor(private dia:MatDialog,private http:HttpClient) { }
  getWork1:any="";
  getWork2:any="";
openForm(){
  this.dia.open(WorkFormComponent);
}
  ngOnInit() {
    this.http.get<any>(environment.empWorkform).subscribe(value=>{
      this.getWork1=value;
  });
  // this.http.get<any>("http://localhost:3000/EmpStatus").subscribe(data=>{
  //   this.getWork2=data;
  // })
  }
editTask(item:any){
  this.dia.open(WorkFormComponent),{
    data:item
  }
}

}
