import { Component, OnInit } from '@angular/core';
import { NotificationService } from './Notification.service';

@Component({
  selector: 'app-Admin_Notification',
  templateUrl: './Admin_Notification.component.html',
  styleUrls: ['./Admin_Notification.component.css']
})
export class Admin_NotificationComponent implements OnInit {

  constructor(private service:NotificationService) { }
getDetails:any=""
  ngOnInit() {
    this.service.getResume().subscribe(data=>{
      this.getDetails=data
    })

  }

}
