import { Component, OnInit } from '@angular/core';
//import { ProductPromptComponent } from 'src/app/components/products/products.component';


//import { ProductPromptComponent } from '../modal-overlays/dialog/product-prompt/product-prompt.component';

import { ApiInvokeService } from 'src/app/components/services/api-invoke.service';
import { CacheService } from 'src/app/components/services/cache.service';
import { IProductsModel, ICategoriesModel } from '../../components/interfaces/rao-admin-model';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loading = false;
  products: IProductsModel;
  editableProduct: any;
  productsList: any;  

  constructor(private apiInvokeService : ApiInvokeService,  private cacheService: CacheService) { 
  
  }

  ngOnInit(): void {
     this.apiInvokeService.get(this.apiInvokeService.productsEndPointUrl).subscribe(data => {
       console.log(data);
       this.productsList = data;
     });
  
  }
  refreshProducts(): void {
    this.apiInvokeService.get(this.apiInvokeService.productsEndPointUrl).subscribe( (data: IProductsModel) => {
    this.products = data;
    this.loading = false;
  });
}

// ngOnInit(): void {
//   this.loading = true;
//   this.refreshProducts();
//   this.refreshCategories();
//   this.cacheService.setEditableProduct(null);
// }

// refreshCategories(): void {
//   this.apiInvokeService.get(this.apiInvokeService.categoriesEndPointUrl).subscribe( (data: ICategoriesModel) => {
//     console.log(data);
//     this.cacheService.setCategoreis(data);
//   });
// }

// refreshProducts(): void {
//     this.apiInvokeService.get(this.apiInvokeService.productsEndPointUrl).subscribe( (data: IProductsModel) => {
//     this.products = data;
//     this.loading = false;
//   });
// }

// open(): void {
//   this.dialogService.open(ProductPromptComponent, { closeOnBackdropClick: false })
//     .onClose.subscribe((product) => {
//       product && this.postProduct(product);
//     });
// // }

// postProduct(product: IProductsModel): void{
//     this.loading = true;
//     this.apiInvokeService.post(this.apiInvokeService.productsEndPointUrl, product).subscribe( (data) => {
//     this.refreshProducts();
//   });
// }

// editProduct(product: IProductsModel): void {
//   this.editableProduct = product;
//   this.cacheService.setEditableProduct(product);
//   this.dialogService.open(ProductPromptComponent)
//     .onClose.subscribe((newProduct) => {
//       this.cacheService.setEditableProduct(null);
//       if(newProduct){
//         this.editableProduct["newProduct"] = newProduct;          
//         this.loading = true;
//         this.apiInvokeService.update(this.apiInvokeService.productsEndPointUrl, this.editableProduct).subscribe( () => {
//           this.refreshProducts();
//         });
//       }
//     });
// }

deleteProduct(product: IProductsModel): void {
    this.loading = true;
    this.apiInvokeService.delete(this.apiInvokeService.productsEndPointUrl, product).subscribe( () => {
      this.refreshProducts();
    });
}

  
  

}
