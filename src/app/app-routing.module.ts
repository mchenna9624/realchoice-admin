import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { EnterdetailsComponent } from './components/products/enterdetails/enterdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/products/details/details.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
    {
  path: 'products', 
  component: ProductsComponent ,
},
{
  path: 'enterdetails', 
  component: EnterdetailsComponent,
},
{
  path: 'details', 
  component: DetailsComponent,
},
]
}
 ];
=======
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

>>>>>>> a037feb7004c74291e817c4038a6e3e589616847

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
