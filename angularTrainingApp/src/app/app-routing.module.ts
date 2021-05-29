import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/products/products.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductComponent } from './product/product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes:Routes=[
  {
    path:"", component: ProductHomeComponent,
    children:[
      { path:"", component:ProductsComponent},
      { path:"product", component:ProductComponent},
      { path:"product/:id", component:ProductComponent}
    ]    
  },
  {
    path:"calc" , component: CalculatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
