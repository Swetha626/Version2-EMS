import { Component, OnInit } from '@angular/core';
import { Add_EmpComponent } from '../Add_Emp/Add_Emp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Admin_Dashboard',
  templateUrl: './Admin_Dashboard.component.html',
  styleUrls: ['./Admin_Dashboard.component.css']
})
export class Admin_DashboardComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }
openDia(){
  this.route.navigate(['/Add_Emp']);
}
}
