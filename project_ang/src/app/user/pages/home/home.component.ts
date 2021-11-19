import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct : any = [];
  constructor(
    private _prod : ProductService
  ) {
    this._prod.getAll().subscribe((result)=>{
      this.allProduct = result;
    })
   }

  ngOnInit(): void {
  }

}
