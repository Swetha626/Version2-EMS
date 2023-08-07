import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Emp_Home',
  templateUrl: './Emp_Home.component.html',
  styleUrls: ['./Emp_Home.component.css']
})
export class Emp_HomeComponent implements OnInit {

  constructor(private HTTP:HttpClient) { }
add:any='';
loginID:any="";
status!:boolean;
  ngOnInit() {
    const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
    if (sessionUser) {
      this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
    }
    this.open();
    var nowDate=new Date().getDate();
    var nowMonth=new Date().getMonth();
    this.HTTP.get<any>(environment.empLogin).subscribe(data=>{
      const event=data.find((a:any)=>{
        var eventDate=new Date(a.DOB).getDate();
        var eventMonth=new Date(a.DOB).getMonth();
        return eventDate==nowDate && eventMonth==nowMonth
      });
      if(event){
        this.status=true

      }
    })
  }

  open(){
    this.add=true;
    this.close();

  }
  close(){
    setInterval(()=>{
      this.add=false

    },50000)


  }
}
