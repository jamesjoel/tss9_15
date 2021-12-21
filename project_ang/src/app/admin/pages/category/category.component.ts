import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  name:any;
  formData:any;
  constructor(private _cart : CartService) { }

  ngOnInit(): void {
  }

  demo(a:any){
    console.log(a);
    this.name = a;
  }

  rec(obj:any){
    console.log(obj);
    this.formData = obj;
  }

  demo2(){
    this._cart.update(1);
  }

}
