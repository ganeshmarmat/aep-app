import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { FloatLabelType } from "@angular/material/form-field";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-supplier-po-create",
  templateUrl: "./supplier-po-create.component.html",
  styleUrls: ["./supplier-po-create.component.css"],
})
export class SupplierPoCreateComponent implements OnInit {
  public SChecked = true;
  public onlySupplier = [];
  public notOnlySupplier = [];
  displayedColumns: string[] = [
    "deliveryItem",
    "deliveryDate",
    "deliveryQty",
    "deliveryComment",
    "action",
  ];

  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource([]);
  additionalData = {
    id: 0,
    deliveryItem: "",
    deliveryDate: "",
    deliveryQty: "",
    deliveryComment: "",
  };

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl("auto" as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || "auto";
  }

  ngOnInit(): void {
    // http://deverp.ayaantech.in/api/ERPVMPurchaseOrder/GetPODDLs/supplierId?supplierId=54
    let url = `http://deverp.ayaantech.in/api/ERPVMPurchaseOrder/GetPODDLs/supplierId?supplierId=54`;
    this.http.post(url, {}).subscribe((res) => {
      // console.log(res);
      this.notOnlySupplier = res['quotationDDL']; //quotationDDL
      this.onlySupplier = res['supplierDDL']; //supplierDDL
    });
  }

  isChangePricing(value: any, name: any) {
    this.additionalData[name] = value;
    if (name === "deliveryItem") {
      this.additionalData.id = this.additionalData.id + 1;
    }
  }
  isSubmitAdd() {
    let temp = this.dataSource.data;
    temp.push(Object.assign({}, this.additionalData));
    this.dataSource.data = temp;
    console.log(this.dataSource.data);
  }

  onChangeChecked(value: any) {
    // console.log(value);
    this.SChecked = value;
  }
}
export interface PeriodicElement {
  id: number;
  deliveryItem: any;
  deliveryDate: any;
  deliveryQty: any;
  deliveryComment: any;
}

const ELEMENT_DATA: PeriodicElement[] = [];
