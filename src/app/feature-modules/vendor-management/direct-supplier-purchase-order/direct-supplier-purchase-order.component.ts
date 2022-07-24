import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectSupplierPOStatusCountModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-statuscount-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';

@Component({
  selector: 'app-direct-supplier-purchase-order',
  templateUrl: './direct-supplier-purchase-order.component.html',
  styleUrls: ['./direct-supplier-purchase-order.component.css']
})
export class DirectSupplierPurchaseOrderComponent implements OnInit {
 status: DirectSupplierPOStatusCountModel;
  constructor(private directposervice:DirectSuppliePurchaseOrderService,
    private router : Router, private route : ActivatedRoute) {
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

}
