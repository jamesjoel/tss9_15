import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // name="rohit";
  name:string="rohit";

  color:any[]=["red", "green", "blue", 100];

  x=20;

  constructor() { }

  ngOnInit(): void {
  }

}
