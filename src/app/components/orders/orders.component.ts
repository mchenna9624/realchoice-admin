import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
// import { LocalDataSource } from 'ng2-smart-table';
import { ApiInvokeService } from 'src/app/services/api-invoke.service';
// import { NbDialogService } from '@nebular/theme';
import { OrderBoxComponent } from 'src/app/order-box/order-box.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  data: any = [];
  loading = false;
  
  settings = {
    hideSubHeader: true,
   actions: {
     edit: true,
     add: true,
   },
  //  add: {
  //    addButtonContent: '<mat-icon>add</mat-icon>',
  //    createButtonContent: '<mat-icon>done</mat-icon>',
  //    cancelButtonContent: '	<mat-icon>clear</mat-icon>',
  //  },
  //  edit: {
  //    editButtonContent: '<mat-icon>create</mat-icon>',
  //    saveButtonContent: '<mat-icon>done</mat-icon>',
  //    cancelButtonContent: '<mat-icon>clear</mat-icon>',
  //  },
  //  delete: {
  //    deleteButtonContent: `<button><mat-icon>delete</mat-icon></button>`,
  //    confirmDelete: true,
  //  },
   columns: {
     ORDER_ID: {
       title: 'ORDER ID',
       type: 'string',
     },
     FIRST_NAME: {
       title: 'First Name',
       type: 'string',
     },
     LAST_NAME: {
       title: 'Last Name',
       type: 'string',
     },
     STREET_ADDRESS: {
       title: 'Street Address',
       type: 'string',
     },
     CITY_ADDRESS: {
       title: 'City',
       type: 'string',
     },
     STATE_ADDRESS: {
       title: 'State',
       type: 'string',
     },
     ZIP_ADDRESS: {
       title: 'Zip',
       type: 'string',
     },
     EMAIL_ADDRESS: {
       title: 'Email',
       type: 'string',
     },
     PHONE: {
       title: 'Phone',
       type: 'string',
     },
   },
 };



 constructor(  private apiInvokeService: ApiInvokeService, private router: Router ) {
  this.refreshData();
}

 ngOnInit(): void {

 }
 onDeleteConfirm(event): void {
  this.loading = true;
  this.apiInvokeService.delete(this.apiInvokeService.inprogressOrdersUrl, {ORDER_ID: event.data.ORDER_ID }).subscribe( (data) => {
    console.log(data);
    this.data = data;
    this.updateOrderHistory(event.data);
    this.refreshData();
  });
}

updateOrderHistory(data: any): void {
  let tmp = {};
  tmp["ORDER_DETAIL"] = JSON.stringify(data);
  this.apiInvokeService.update(this.apiInvokeService.orderHistoryURL, tmp).subscribe( (data) => {
    this.loading = false;
  });
}

refreshData(): void {
  this.loading = true;
  this.apiInvokeService.get(this.apiInvokeService.inprogressOrdersUrl).subscribe( (data) => {
    console.log(data);
    this.data = data;
    
    this.loading = false;
  });
}

onUserRowSelect(event): void {
  console.log(event.data);
  // this.dialogService.open(OrderBoxComponent, {
  //   context: {
  //     orderInfo: event.data
  //   },
  //   hasBackdrop: true,
  //   closeOnBackdropClick: false,
  //   closeOnEsc: false,
  //   dialogClass: 'model-full'
  // });
}

goToPage(orderInfo:any):void{
  this.apiInvokeService.setCurrentProductInfo(orderInfo);
  this.router.navigateByUrl('order-box'); 
} 

}
