import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

// interface Product{
//   _id? : string;
//   title : string;
//   price : number;
//   category : string;
//   detail : string;
//   discount: number;

// }

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product={
    title : "",
    price : null,
    category : "",
    detail : "",
    discount : null
  };

  constructor(
    private _pro : ProductService,
    private _router : Router
    ) { }

  ngOnInit(): void {
  }

  add(){
    this._pro.save(this.product).subscribe((result)=>{
      // console.log(result);
      this._router.navigate(["/admin/product"]);
    })
  }

}
