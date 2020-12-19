import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
