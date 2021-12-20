import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = "rohit";
  allProduct:any=[];
  
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }

}
