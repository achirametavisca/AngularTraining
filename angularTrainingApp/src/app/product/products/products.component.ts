import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>;
  selectedProduct:Product;
  constructor(private _productService:ProductService, private router:Router) { 
    this.products= new Array<Product>();
    this.selectedProduct = new Product();
  }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this._productService.getProducts().subscribe(
      (data)=>{this.products = data},
      (error)=>{console.log(JSON.stringify(error))},
      ()=>{},
    );
  }

  editProduct(productId:number){
    this.router.navigate([`product/${productId}`])
  }

  deleteProduct(id:string){
    this._productService.deleteProduct(id).subscribe(
      (data)=>{
        this.products = this.products.filter(x=>x.id != id);
      },
      (error)=>{console.log(JSON.stringify(error))},
      ()=>{},
    );
  }

  

  

}
