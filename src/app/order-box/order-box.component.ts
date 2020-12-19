import { Component, OnInit } from '@angular/core';
import { ApiInvokeService } from 'src/app/services/api-invoke.service';

@Component({
  selector: 'app-order-box',
  templateUrl: './order-box.component.html',
  styleUrls: ['./order-box.component.css']
})
export class OrderBoxComponent implements OnInit {


  orderInfo: any;
  data: any = [];
  loading = false;
  orderedItems:any;

  constructor(private apiInvokeService: ApiInvokeService) {
    
  }

  ngOnInit(): void {
   this.orderInfo = this.apiInvokeService.getCurrentProductInfo();
   this.orderedItems = JSON.parse(eval('('+this.orderInfo.ORDERED_ITEMS+')'));
   
  }


  
}


