import { Component, OnInit } from '@angular/core';

import { ApiInvokeService } from 'src/app/components/services/api-invoke.service';
import { CacheService } from 'src/app/components/services/cache.service';
import { IProductsModel, ICategoriesModel } from 'src/app/components/interfaces/rao-admin-model';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormArray, FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent implements OnInit {

  constructor(private _fb: FormBuilder, private apiInvokeService : ApiInvokeService,  private cacheService: CacheService) { 
  
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
    return this.addmore.get('itemRows') as FormArray;
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
