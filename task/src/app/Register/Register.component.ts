import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup,PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent {


  constructor(private fb:FormBuilder,private http:HttpClient, private router:Router) { }
  regForm=this.fb.group({
    username:[,[Validators.required,Validators.minLength(3)]],
    mobile:[,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
    mail:[,[Validators.required,Validators.pattern("^[0-9a-zA-Z]+[._]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$")]]

  })

  ngOnInit() {
  }

}
