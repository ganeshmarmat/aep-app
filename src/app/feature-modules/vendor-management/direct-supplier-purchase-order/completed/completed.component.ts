import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DirectSupplierPOModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { POFilterDataModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-POFilterData.model';
import { PODirectSupplierStatusModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-pageload-status.model';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  // purchaseOrderMasterId: number;
  // purchaseOrderNumber: string;
  // quotationNo: string;
  // supplierName: string;
  // grandTotal: number;
  // purchaseOrderDate: string;
  // approvalStatus: string;
  // isApproved: boolean;//need to add
  // isStatus: number;//need to add
   displayedColumns = ['purchaseOrderNumber','quotationNo', 'supplierName', 'grandTotal', 'purchaseOrderDate', 'approvalStatus','action'];
  //displayedColumns = ['purchaseOrderNumber','quotationNo', 'supplierName', 'grandTotal', 'purchaseOrderDate', 'approvalStatus'];//,'action', 'view'];

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
  {console.log(fd);
this.fdata=fd;
  }
  get filterdata():POFilterDataModel{
    
    return this.fdata;
  }
loaddata()
{
  let temp=Object.assign({},this.filterdata);
  temp.isStatus=3;
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

  // this.data.getdirectsupplierpo().subscribe({
  //   next: res => {
  //     debugger;
  //     this.dataSource=new MatTableDataSource(res);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //     console.log(res);
  //   },
  //   error: err => {
  //     console.log(err);
  //   }
  // });
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
