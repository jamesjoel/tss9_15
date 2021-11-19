import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showMsg=false;
  data = [
    {
      name : "rohit",
      age : 21,
      city : "indore"
    },
    {
      name: "amar",
      age: 22,
      city: "mumbai"
    },
    {
      name: "nidhi",
      age: 28,
      city: "mumbai"
    },
    {
      name: "rajesh",
      age: 27,
      city: "pune"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  demo(){
    // alert();
   return false;
  }
  demo2(){
    this.showMsg = true;
    setTimeout(()=>{
      this.showMsg = false;
    }, 1000);
    return false;
  }

  demo3(){
    this.showMsg = false;
  }

}
