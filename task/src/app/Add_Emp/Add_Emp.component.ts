import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-Add_Emp',
  templateUrl: './Add_Emp.component.html',
  styleUrls: ['./Add_Emp.component.css']
})
export class Add_EmpComponent implements OnInit {

  constructor(  private fb:FormBuilder,private route:Router)
{}


  //  ************************************************** Register Form Validation **************************

  formRegister=this.fb.group({
    username:[,Validators.required],
    email:[,Validators.required],
    mobile:[,Validators.required],
    date:[,Validators.required],
    password1:[,Validators.required],
    cpassword1:[,Validators.required],
    gender:[,Validators.required],
  },
  );


// ******************************************************** Register  ***************************************

//   submitForm(){
//     if(!this.formRegister.valid){
//        alert("Enter all fields")
//      }
//     else if(this.formRegister.valid){
//       this.user.addUserInformation(this.formRegister.value).subscribe(data=>{
//         alert("Form submitted");
//       })
//      }
// }

// **********************************************  login Validation ********************************************

 loginMail:any="";
 loginPassword:any="";
 usersdata:any="";
isLoggedIn:boolean=false;
displayname:any=""
  login(){
    // for(let users of this.usersdata){
    //   console.log(users.email);
    //   if(usermail.value==users.email&&userpassword.value==users.password1){
    //    this.isLoggedIn=true;
    //    this.displayname=users.username;
    //     alert("login sucessfull");
    //     const loginpanel:any= document.querySelector(".Loginmodal");
    //     loginpanel.close();
    //     break;
    //   }
    //   else{
    //     alert("check login credintials");
    //   }
    // }

  }

  logout(){
     this.isLoggedIn=false;

  }
// *************************************************** Modal  ****************************

  loginmodal(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    const registerpanel:any=document.querySelector(".Registermodal");
    registerpanel.close();
    loginpanel.showModal();
  }
  close(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    loginpanel.close();
  }


  registermodal(){
    const loginpanel:any= document.querySelector(".Loginmodal");
    const registerpanel:any=document.querySelector(".Registermodal");
    loginpanel.close();
    registerpanel.showModal();
  }

  ngOnInit() {
  }

}
