import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Admin_Notification',
  templateUrl: './Admin_Notification.component.html',
  styleUrls: ['./Admin_Notification.component.css']
})
export class Admin_NotificationComponent implements OnInit {

  constructor(private http:HttpClient) { }
getDetails:any=""
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/JavaDeveloper").subscribe(value=>{
      this.getDetails=value;
    })
  }

}
