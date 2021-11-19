import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProduct:any=[];

  constructor(
    private _prod : ProductService
  ) {

    this._prod.getAll().subscribe((result)=>{
      // console.log(result);
      this.allProduct = result;
    })

   }

  ngOnInit(): void {
  }

  

}
