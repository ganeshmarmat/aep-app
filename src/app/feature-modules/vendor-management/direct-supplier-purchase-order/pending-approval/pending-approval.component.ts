
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DirectSupplierPOModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PODirectSupplierStatusModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-pageload-status.model';
import { POFilterDataModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-POFilterData.model';
@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css']
})
export class PendingApprovalComponent implements OnInit {
  // displayedColumns = ['poNumber','quotationId', 'supplierId', 'grandTotal', 'poDate', 'approvalStatusId','action', 'view'];
  displayedColumns = ['purchaseOrderNumber','quotationNo', 'supplierName', 'grandTotal', 'purchaseOrderDate', 'approvalStatus','action'];

  public pageSize=10;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private data:DirectSuppliePurchaseOrderService,
    private router : Router, private route : ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
  }
  getIDFun(id: number){
    alert(id)
  }


  dataSource: MatTableDataSource<PODirectSupplierStatusModel>;
  fdata:POFilterDataModel;
  @Input() 
  set filterdata(fd:POFilterDataModel)
  {
this.fdata=fd;
this.loaddata();
  }
  get filterdata():POFilterDataModel{
    
    return this.fdata;
  }
loaddata()
{
  let temp=Object.assign({},this.filterdata);
  temp.isStatus=2;
  this.data.getDirectSupplierPOByFilter(temp).subscribe({
    next: res => {
      debugger;
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    },
    error: err => {
      console.log(err);
    }
  });
}


  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.loaddata();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //after edit  click
  edit(id : number){
    // this.router.navigate('/edit/');
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
  
  //after delete button click
  delete(id : number){
    if(confirm("Do u want to delete "+ id +" id data?")) {
      alert("Data is delete successfully.")
  }
  }

}
