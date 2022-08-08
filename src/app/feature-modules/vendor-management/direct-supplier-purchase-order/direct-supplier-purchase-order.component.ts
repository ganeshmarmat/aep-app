import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectSupplierPOStatusCountModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-statuscount-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';
import {  POFilterDataModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-POFilterData.model';

@Component({
  selector: 'app-direct-supplier-purchase-order',
  templateUrl: './direct-supplier-purchase-order.component.html',
  styleUrls: ['./direct-supplier-purchase-order.component.css']
})
export class DirectSupplierPurchaseOrderComponent implements OnInit {
 status: DirectSupplierPOStatusCountModel;
 public filterdata:POFilterDataModel;
  constructor(private directposervice:DirectSuppliePurchaseOrderService,
    private router : Router, private route : ActivatedRoute) {

     this.filterdata ={"isStatus":0, "poDateTo":new Date("01-30-2022"),"poDateFrom":new Date("01-30-2016"),"userId":7,"poTypeId":2};
directposervice.getstatuscount().subscribe({
  next: res => {
    this.status=res;
    console.log(res);
  },
  error: err => {
    console.log(err);
  }
}); 

   }

  ngOnInit(): void {
  }

  create(){
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  refresh(){
    this.filterdata=Object.assign({},this.filterdata);
  }

}