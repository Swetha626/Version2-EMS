import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkFormComponent } from '../work-form/work-form.component';

@Component({
  selector: 'app-Admin_Work',
  templateUrl: './Admin_Work.component.html',
  styleUrls: ['./Admin_Work.component.css']
})
export class Admin_WorkComponent implements OnInit {

  constructor(private dia:MatDialog) { }
openForm(){
  this.dia.open(WorkFormComponent);
}
  ngOnInit() {
  }

}
