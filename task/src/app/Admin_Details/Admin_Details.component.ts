import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Admin_Details',
  templateUrl: './Admin_Details.component.html',
  styleUrls: ['./Admin_Details.component.css']
})
export class Admin_DetailsComponent implements OnInit {
pranavImg:any=environment;
saruImg:any=environment;
shreeImg:any=environment;
sweImg:any=environment
  constructor() { }

  ngOnInit() {
  }

}
