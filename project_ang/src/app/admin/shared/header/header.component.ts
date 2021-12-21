import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count:any;
  constructor(public _cart : CartService) {
    this._cart.myobs.subscribe(data=>{
      this.count = data;
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

}
