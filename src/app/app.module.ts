import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiInvokeService } from 'src/app/services/api-invoke.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OrderBoxComponent } from 'src/app/order-box/order-box.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import{FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

import {MatTableModule} from '@angular/material/table';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    OrdersComponent,
    MainPageComponent,
    SideBarComponent,
    FooterComponent,
    OrderBoxComponent 
    
  ],
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    Ng2SmartTableModule,
    MatDialogModule,
    HttpClientModule,
    NgbModule,
    MatMenuModule
    // NgxBootstrapIconsModule 
  ],
  providers: [ApiInvokeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
