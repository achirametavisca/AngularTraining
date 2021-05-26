import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>;
  constructor(private _productService:ProductService) { 
    this.products= new Array<Product>();
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (data)=>{this.products = data},
      (error)=>{console.log(JSON.stringify(error))},
      ()=>{},
    );
  }

}
