import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Emp_WorkStatus',
  templateUrl: './Emp_WorkStatus.component.html',
  styleUrls: ['./Emp_WorkStatus.component.css']
})
export class Emp_WorkStatusComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  getTask:any='';
  loginID:any;

  ngOnInit() {
    const sessionUser = sessionStorage.getItem('nameID'); // <-- retrieve user details from session storage
  if (sessionUser) {
    this.loginID = JSON.parse(sessionUser);  //<-- Geting ID from session strongs (as viewable obj)
  }
this.search().subscribe(data=>{
  this.getTask=data;
})
  }
  search(): Observable<any> {
    return this.http.get<any>(environment.empWorkform).pipe(
      map((data) => {
        return data.filter(
          (item:any) =>
            item.owner===this.loginID.userName
        );
      })
    );
  }

  workForm=this.fb.group({
    status:[,[Validators.required]],
    totalTime:[,[Validators.required]],
    text:[,[Validators.required]],
  })

  send(item:any)
  {
    if(this.workForm.valid)
    {
      alert("Work Status Submitted successfully");
      this.db(item);

    }
  }

  db(item:any){
    var body={
      status:this.workForm.value.status,
      totalTime:this.workForm.value.totalTime,
      text:this.workForm.value.text

    }
    this.http.patch<any>(environment.empWorkform+'/'+item.id,body).subscribe(data=>{

    })
  }


}
