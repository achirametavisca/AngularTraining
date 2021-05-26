import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ProductComponent, ProductsComponent]
})
export class ProductModule { }
