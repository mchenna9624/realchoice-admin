// import { Component, Input, OnInit } from '@angular/core';
// import {MatDialogModule} from '@angular/material/dialog';
// import { LocalDataSource } from 'ng2-smart-table';


// @Component({
//   selector: 'app-order-dilog',
//   templateUrl: './order-dilog.component.html',
//   styleUrls: ['./order-dilog.component.css']
// })
// export class OrderDilogComponent implements OnInit {

//   settings = {
//     hideSubHeader: true,
//     actions: {
//       edit: false,
//       add: false,
//       delete: false,
//     },
//     add: {
//       addButtonContent: '<i class="nb-plus"></i>',
//       createButtonContent: '<i class="nb-checkmark"></i>',
//       cancelButtonContent: '<i class="nb-close"></i>',
//     },
//     edit: {
//       editButtonContent: '<i class="nb-edit"></i>',
//       saveButtonContent: '<i class="nb-checkmark"></i>',
//       cancelButtonContent: '<i class="nb-close"></i>',
//     },
//     delete: {
//       deleteButtonContent: '<i class="nb-trash"></i>',
//       confirmDelete: true,
//     },
//     columns: {
//       Product: {
//         title: 'Product',
//         type: 'string',
//       },
//       Category: {
//         title: 'Category',
//         type: 'string',
//       },
//       Quantity: {
//         title: 'Quantity',
//         type: 'string',
//       },
//     },
//   };

//   source: LocalDataSource = new LocalDataSource();

//   @Input() orderInfo: any;
//   data: any = [];

//   constructor(protected ref: MatDialogRef<OrdersDialogComponent>) {

//   }

//   ngOnInit(): void {
//     this.data = [];
//     var tmp = JSON.parse(eval('('+this.orderInfo.ORDERED_ITEMS+')'));
//     tmp.forEach(element => {
//       var tmpObj = {};
//       tmpObj["Product"] = element.product.productName;
//       tmpObj["Category"] = element.product.category;
//       tmpObj["Quantity"] = element.quantity;
//       this.data.push(tmpObj);
//     });
//   }

//   dismiss() {
//     this.ref.close();
//   }

// }

