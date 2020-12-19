import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiInvokeService } from 'src/app/components/services/api-invoke.service';
import { CacheService } from 'src/app/components/services/cache.service';
import { IProductsModel, ICategoriesModel } from 'src/app/components/interfaces/rao-admin-model';
import { FormArray, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  loading = false;
  products: IProductsModel;
  editableProduct: any;
  productsList: any;  
 items =[];

  constructor(private http: HttpClient, private _fb: FormBuilder, private apiInvokeService : ApiInvokeService,  private cacheService: CacheService) { 
  this.http.get(this.apiInvokeService.productsEndPointUrl). subscribe (data =>{
    console.log(data);
    

    for (let key in data)
    if (data.hasOwnProperty(key))
    this.items.push(data[key]);

  })
  }
public addmore: FormGroup;


  

  ngOnInit(): void {

    this.addmore = this._fb.group({
      Action:[''],
      Id:[''],
      Quantity:[''],
      Price:[''],
      itemRows: this._fb.array([this.initItemRows()])
       });
  }
  get formArr() {
    return this.addmore.get( this.apiInvokeService.productsEndPointUrl) as FormArray;
  }
initItemRows(){
  return this._fb.group({
    Action:[''],
    Id:[''],
    Quantity:[''],
    Price:[''],
  });
}
addNewRow(){
  this.formArr.push(this.initItemRows());
}
deleteRow(index: number) {
  this.formArr.removeAt(index);
}
}

