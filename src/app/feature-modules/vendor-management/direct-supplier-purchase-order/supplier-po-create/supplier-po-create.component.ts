import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-supplier-po-create',
  templateUrl: './supplier-po-create.component.html',
  styleUrls: ['./supplier-po-create.component.css']
})
export class SupplierPoCreateComponent implements OnInit {
  displayedColumns: string[] = ['deliveryItem','deliveryDate', 'deliveryQty', 'deliveryComment', 'action'];
  dataSource = ELEMENT_DATA;
  additionalData = {
    totalCast : "",
    rateIndictor : "",
    applyFlatDiscount : "",
    additionalCharge : ""
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnInit(): void {
  }

  isChangePricing(event: any){
    console.log(event);
    
  }

}
export interface PeriodicElement {
  id:number,
  deliveryItem: any;
  deliveryDate: any;
  deliveryQty: any;
  deliveryComment: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1, deliveryItem: 1, deliveryDate: 'Hydrogen', deliveryQty: 1.0079, deliveryComment: 'H'},
  {id:2, deliveryItem: 2, deliveryDate: 'Helium', deliveryQty: 4.0026, deliveryComment: 'He'},
];