import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderBoxComponent } from 'src/app/order-box/order-box.component';


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
  {
    path:'order-box',
    component:OrderBoxComponent

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
