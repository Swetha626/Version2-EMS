import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Emp_Home',
  templateUrl: './Emp_Home.component.html',
  styleUrls: ['./Emp_Home.component.css']
})
export class Emp_HomeComponent implements OnInit {

  constructor() { }
add:any='';

  ngOnInit() {
    this.open();
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
