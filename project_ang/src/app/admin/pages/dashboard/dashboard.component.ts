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
  data :any[]= [];
  
  constructor(
    private _http : HttpClient
  ) {
    this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
      this.allProduct = result;
      this.data = result;
    })
   }

  ngOnInit(): void {
  }

  keyword = 'title';
  z:any;


  selectEvent(item:any) {
    console.log(item);
    // do something with selected item
  }

  onChangeSearch(val: string) {
    this.z=val;
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e:any){
    // do something when input is focused
  }

}
