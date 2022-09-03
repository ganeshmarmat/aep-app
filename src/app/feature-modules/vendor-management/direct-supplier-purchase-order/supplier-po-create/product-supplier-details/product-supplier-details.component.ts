import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-supplier-details',
  templateUrl: './product-supplier-details.component.html',
  styleUrls: ['./product-supplier-details.component.css']
})
export class ProductSupplierDetailsComponent implements OnInit {
  @Input()
  poDDL:any;
  public SChecked = true;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeChecked(value: any) {
    // console.log(value);
    this.SChecked = value;
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
