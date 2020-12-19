import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { CoreModule } from './@core/core.module';
// import { ThemeModule } from './@theme/theme.module';
import { ApiInvokeService } from 'src/app/components/services/api-invoke.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { OrdersComponent } from './components/orders/orders.component';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EnterdetailsComponent } from './components/products/enterdetails/enterdetails.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DetailsComponent } from './components/products/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    OrdersComponent,
    EnterdetailsComponent,
    DetailsComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    Ng2SmartTableModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [ApiInvokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
