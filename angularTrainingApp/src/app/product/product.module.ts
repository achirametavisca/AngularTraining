import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ProductHomeComponent } from './product-home/product-home.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[ProductComponent, ProductsComponent]
})
export class ProductModule { }
