import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product;

  constructor(private productServ:ProductService, private router:Router,private activatedRoute:ActivatedRoute) { 
    this.product=new Product();
  }

  ngOnInit(): void {
    const productId:string = this.activatedRoute.snapshot.paramMap.get('id');
    if (productId != '' && productId != null) {
      this.setPrductDetails(productId)
    }
  }

  private setPrductDetails(productId:string){
    this.productServ.getProduct(productId).subscribe(
      (response)=>{
        this.product = response;
      },
      (error)=>{
        console.log(console.error());       
      },
      ()=>{
        // finally block
      });
  }

  save(){
    if (this.product.id != '' && this.product.id != null) {
      this.updateProduct()
    }
    else{
      this.createNewProduct();
    }
    
  }

  private createNewProduct(){
    this.productServ.postProduct(this.product).subscribe(
      (response)=>{
        this.router.navigate(['']);
      },
      (error)=>{
        console.log(console.error());       
      },
      ()=>{
        // finally block
      });
  }

  private updateProduct(){
    
    this.productServ.updateProduct(this.product.id,this.product).subscribe(
      (response)=>{
        this.router.navigate(['']);
      },
      (error)=>{
        console.log(console.error());       
      },
      ()=>{
        // finally block
      });
  }

  clear():void{
    this.product = new Product();
  }

}
