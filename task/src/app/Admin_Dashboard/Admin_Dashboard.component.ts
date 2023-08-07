import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Validators,PatternValidator} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddEmpService } from '../Add_Emp/AddEmp.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-Admin_Dashboard',
  templateUrl: './Admin_Dashboard.component.html',
  styleUrls: ['./Admin_Dashboard.component.css']
})
export class Admin_DashboardComponent implements OnInit {


  constructor(public route:Router,private fb:FormBuilder,private http:HttpClient) { }

  addForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    mail:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
    mobile:[,[Validators.required]],
salary:[,[Validators.required]]
  })


status:boolean=false;
add(){
  this.status=!this.status;
}
show(item:any){
  this.status=!this.status;
  this.editEmp(item);

}
close(){
  this.status=false;
}
addDetails(){
  if(this.addForm.valid){
    alert("Successfully added");
    this.postEmp();
    this.addForm.reset();
  }
}
getDetails:any="";
  ngOnInit() {
    this.http.get<any>(environment.adminAddemp).subscribe(value1=>{
      this.getDetails=value1;
    });
  }


  postEmp(){

      var body={
        username:this.addForm.value.username,
        mail:this.addForm.value.mail,
        mobile:this.addForm.value.mobile,
        salary:this.addForm.value.salary,

      }
        this.http.post<any>(environment.adminAddemp,body).subscribe(data=>{
    })

  }
  editEmp(item:any){
    this.addForm.controls['username'].setValue(item.username);
    this.addForm.controls['mail'].setValue(item.mail);
    this.addForm.controls['mobile'].setValue(item.mobile);
    this.addForm.controls['salary'].setValue(item.salary);
    this.http.patch<any>(environment.adminAddemp+item.id,this.addForm.value).subscribe(data=>{
      alert("patch")

    })
  }
// delEmp(item:any){
//   this.delEmp(item.id).subscribe(()=>{
//     alert("Employee Deleted");
//   })
delEmp(item:any){
  this.http.delete(environment.adminAddemp+item).subscribe(data=>{
alert("Deleted");
this.ngOnInit();
  })
}


// postDetails(){
//   this.empObj.username=this.addForm.value.username;
//   this.empObj.mail=this.addForm.value.mail;
//   this.empObj.mobile=this.addForm.value.mobile;
//   this.empObj.salary=this.addForm.value.salary;


//   this.AddEmp.postEmployee(this.empObj).subscribe(()=>{
//     alert("Employee Added Successfully");
//     this.addForm.reset();
//   },
//   )
// }

}
