import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup,PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../Admin_Notification/Notification.service';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent {


  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router, private service:RegisterService) { }
  regForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required]],
    mail:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]],
upload:[,[Validators.required]]
  })
  status:boolean=false;
  register()
  {
    if(this.regForm.valid)
    {
      this.status=true;
      alert("Resume Sumitted Successfully");
      this.db();
    }




  }
db(){
  var body={
    username:this.regForm.value.username,
    mobile:this.regForm.value.mobile,
    mail:this.regForm.value.mobile
  }
  this.service.postResume(body).subscribe(data=>{
    alert("Successfully Stored in a DB");
  })

}
  ngOnInit() {
  }

}
