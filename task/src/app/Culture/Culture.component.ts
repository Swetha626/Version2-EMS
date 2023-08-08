import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Culture',
  templateUrl: './Culture.component.html',
  styleUrls: ['./Culture.component.css']
})
export class CultureComponent implements OnInit {
backgroundImg:any=environment;
  constructor() { }

  ngOnInit() {
  }

}
