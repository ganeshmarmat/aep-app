import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { FloatLabelType } from "@angular/material/form-field";
import { MatTableDataSource } from "@angular/material/table";
import { DirectSuppliePurchaseOrderService } from "src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service";

@Component({
  selector: "app-supplier-po-create",
  templateUrl: "./supplier-po-create.component.html",
  styleUrls: ["./supplier-po-create.component.css"],
})
export class SupplierPoCreateComponent implements OnInit {
  poDDLData:any;
  productitems:any;

  

  

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto" as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder,public directposervice:DirectSuppliePurchaseOrderService) {

    this.loaddata();
  }



  ngOnInit(): void {
    // http://deverp.ayaantech.in/api/ERPVMPurchaseOrder/GetPODDLs/supplierId?supplierId=54
    // let url = `http://deverp.ayaantech.in/api/ERPVMPurchaseOrder/GetPODDLs/supplierId?supplierId=54`;
    // this.http.post(url, {}).subscribe((res) => {
    //   // console.log(res);
    //   this.notOnlySupplier = res['quotationDDL']; //quotationDDL
    //   this.onlySupplier = res['supplierDDL']; //supplierDDL
    // });
  }
  loaddata()
  {
   this.directposervice.getPuchaseOrderPODDLs().subscribe(resp=>{this.poDDLData=resp;console.log(resp)});
   this.directposervice.GetProductExtendDDL().subscribe(resp=>{this.productitems=resp;console.log(resp);
  });
  }

  

  
}

