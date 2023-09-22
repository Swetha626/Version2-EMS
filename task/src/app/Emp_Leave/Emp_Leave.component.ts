import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-Emp_Leave',
  templateUrl: './Emp_Leave.component.html',
  styleUrls: ['./Emp_Leave.component.css']
})
export class Emp_LeaveComponent implements OnInit{
  constructor(private fb:FormBuilder, private http:HttpClient){}
    leaveForm=this.fb.group({
    tlname:[,[Validators.required,Validators.minLength(3)]],
    deptname:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    leaveDate:[,[Validators.required]],
    returnDate:[,[Validators.required]],
    reason:[,[Validators.required]]
})
canExit():boolean{
  console.log("Can Exit")
  if(confirm("Leave the page")){
    return true;
  }
  else{
    return false;
  }
}
getLeave:any="";
loginID:any;
ngOnInit(){

  const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
  }

  this.search().subscribe(data=>{
    this.getLeave=data;
  })
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
    alert("Sumitted Successfully");
    this.db();
    this.leaveForm.reset();
  }
}

search(): Observable<any> {
  return this.http.get<any>(environment.empLeave).pipe(
    map((data) => {
      return data.filter(
        (item:any) =>
          item.username===this.loginID.userName
      );
    })
  );
}

db(){
  var body={
    username:this.loginID.userName,
    tlname:this.leaveForm.value.tlname,
    deptname:this.leaveForm.value.deptname,
    mobile:this.leaveForm.value.mobile,
    leaveDate:this.leaveForm.value.leaveDate,
    returnDate:this.leaveForm.value.returnDate,
    reason:this.leaveForm.value.reason,
    status:''
  }
    this.http.post<any>(environment.empLeave,body).subscribe(data=>{
})

  }

}

