import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeModel } from './Admin_Dashboard.model';
import { AddEmpService } from '../Add_Emp/AddEmp.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Admin_Dashboard',
  templateUrl: './Admin_Dashboard.component.html',
  styleUrls: ['./Admin_Dashboard.component.css']
})
export class Admin_DashboardComponent implements OnInit {
  AddEmp: any;
  empData !:any;

  constructor(public route:Router,private fb:FormBuilder,private http:HttpClient,private service:AddEmpService) { }
empObj:EmployeeModel=new EmployeeModel();
  addForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    mail:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
    mobile:[,[Validators.required]],
salary:[,[Validators.required]]
  })


status:boolean=false;
show(){
  this.status=!this.status
}
  ngOnInit() {
  }


  final:any='';


// openDia(){
//   this.route.navigate(['/Add_Emp']);
// }
postDetails(){
  this.empObj.username=this.addForm.value.username;
  this.empObj.mail=this.addForm.value.mail;
  this.empObj.mobile=this.addForm.value.mobile;
  this.empObj.salary=this.addForm.value.salary;


  this.AddEmp.postEmployee(this.empObj).subscribe(()=>{
    alert("Employee Added Successfully");
    this.addForm.reset();
  },
  )
}

}
