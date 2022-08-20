import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectSupplierPOStatusCountModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-statuscount-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';
import {  CountPOFilterDataModel, POFilterDataModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-POFilterData.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-direct-supplier-purchase-order',
  templateUrl: './direct-supplier-purchase-order.component.html',
  styleUrls: ['./direct-supplier-purchase-order.component.css']
})
export class DirectSupplierPurchaseOrderComponent implements OnInit {
 status: DirectSupplierPOStatusCountModel;
 public filterdata:POFilterDataModel;
 public fromdate:Date=new Date("01-01-2019");
 public todate:Date=new Date();
 public statuscountfilterdata:CountPOFilterDataModel;
  constructor(public directposervice:DirectSuppliePurchaseOrderService,
    private router : Router, private route : ActivatedRoute,public datepipe: DatePipe) {

     this.filterdata ={"isStatus":0, "poDateTo":"","poDateFrom":"","userId":7,"poTypeId":2};
     this.statuscountfilterdata={"typeOfRequest":1,"companyId":1,"branchId":2,"toDate":"","fromDate":"01-01-2019","userId":7,"roleId":4};
     this.refresh();
   }
   loadcountdata()
   {
    this.directposervice.getstatuscount(this.statuscountfilterdata).subscribe({
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
  //todo find lib for format
  getdateformatstring(date:Date):string
  {
    const today = new Date();
const yyyy = date.getFullYear();
let mm:any = date.getMonth() + 1; // Months start at 0!
let dd:any = date.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

return   mm + '-' + dd + '-' + yyyy;
  }
  refresh(){
    //TODO:user details fill
    //this.filterdata.poDateFrom=this.fromdate;
    //this.filterdata.poDateTo=this.todate;
    this.filterdata.poDateFrom=this.getdateformatstring(this.fromdate);
    this.filterdata.poDateTo=this.getdateformatstring(this.todate);
this.statuscountfilterdata.fromDate=this.getdateformatstring(this.fromdate);//this.filterdata.poDateFrom.toLocaleDateString("es-CL");
this.statuscountfilterdata.toDate=this.getdateformatstring(this.todate);//this.filterdata.poDateTo.toLocaleDateString("es-CL");
this.loadcountdata();
    this.filterdata=Object.assign({},this.filterdata);
  }

}