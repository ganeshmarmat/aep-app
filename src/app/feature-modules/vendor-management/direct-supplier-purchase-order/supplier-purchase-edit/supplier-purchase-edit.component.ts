
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-supplier-purchase-edit',
  templateUrl: './supplier-purchase-edit.component.html',
  styleUrls: ['./supplier-purchase-edit.component.css']
})
export class SupplierPurchaseEditComponent implements OnInit {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder,  private route : ActivatedRoute ) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnInit(): void {
    
  }

}

