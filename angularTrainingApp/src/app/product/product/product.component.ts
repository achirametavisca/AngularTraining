import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;
  constructor(private productServ:ProductService) { 
    this.product=new Product();
  }

  ngOnInit(): void {
  }

  save(){
    
    this.productServ.postProduct(this.product).subscribe(
      (response)=>{
        console.log(this.product.id)
      },
      (error)=>{
        console.log(console.error());       
      },
      ()=>{
        // finally block
      });
  }

}
