import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, PatternValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../Session.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent{
image:any=environment;
  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router, private service:SessionService) { }
  loginForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    password:[,[Validators.required,Validators.minLength(6)]]

  })
submit()
{
  this.admin();
  this.emp();
}

admin()
{
  this.http.get<any>(environment.adminLogin).subscribe(res=>{
    const admin=res.find((admin:any)=>{
      return admin.userId===this.loginForm.value.username && admin.password===this.loginForm.value.password
    });
    if(admin){
      alert("Login Successfully");
      this.loginForm.reset();
      this.router.navigate(['Admin_Details'])
    }
})
}
emp()

  {
    this.http.get<any>(environment.empLogin).subscribe(res=>{
        const users=res.find((emp:any)=>{
          return emp.userId===this.loginForm.value.username && emp.password===this.loginForm.value.password
        });
        if(users){
          alert("Login Successfully");
          this.service.nameID=users;
          sessionStorage.setItem('nameID', JSON.stringify(users));
          this.router.navigate(['Emp-Page'])
        }
      })
    }


}

