import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { OrdersComponent } from './components/orders/orders.component';


const routes: Routes = [

  {
    path:'orders',
    component:  OrdersComponent
  },
  
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
