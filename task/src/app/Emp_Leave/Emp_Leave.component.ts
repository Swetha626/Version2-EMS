import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Emp_Leave',
  templateUrl: './Emp_Leave.component.html',
  styleUrls: ['./Emp_Leave.component.css']
})
export class Emp_LeaveComponent implements OnInit{
  constructor(private fb:FormBuilder, private http:HttpClient){}
    leaveForm=this.fb.group({
    // username:[,[Validators.required,Validators.minLength(3)]],
    tlname:[,[Validators.required,Validators.minLength(3)]],
    deptname:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    leaveDate:[,[Validators.required]],
    returnDate:[,[Validators.required]],
    reason:[,[Validators.required]]
})
loginID:any;
ngOnInit(){
  const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
  }
  this.http.get<any>("http://localhost:3000/Approve").subscribe(data=>{
    const notify=data.find((a:any)=>{
      return a.empName===this.loginID.userName

    })
    if(notify){
      this.leave(notify);
    }
  })
}
leaveStatus:any='';
leave(notify:any){
this.leaveStatus=notify;
}
status:boolean=false;
show:boolean=false;
view(){
this.show=true;

}
others(){
this.status=true;
}
sub(){
  if(this.leaveForm.valid)
  {
    alert("Resume Sumitted Successfully");
    this.db();
    this.leaveForm.reset();

  }
}
db(){
  var body={
    username:this.loginID.userName,
    tlname:this.leaveForm.value.tlname,
    deptname:this.leaveForm.value.deptname,
    mobile:this.leaveForm.value.mobile,
    leaveDate:this.leaveForm.value.leaveDate,
    returnDate:this.leaveForm.value.returnDate,
    reason:this.leaveForm.value.reason
  }
    this.http.post<any>("http://localhost:3000/leaveForm",body).subscribe(data=>{


})

  }
}

