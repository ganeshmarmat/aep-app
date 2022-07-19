import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-supplier-quotation-edit',
  templateUrl: './supplier-quotation-edit.component.html',
  styleUrls: ['./supplier-quotation-edit.component.css']
})
export class SupplierQuotationEditComponent implements OnInit {

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
    this.route.params.subscribe((params:Params) => {
      alert(params["id"])
    })
  }

}

