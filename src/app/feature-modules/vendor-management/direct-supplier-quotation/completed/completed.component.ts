import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectSupplierPOModel } from 'src/app/erp-models/vendor-management/direct-supplier-purchase-order/direct-supplier-po-model';
import { DirectSuppliePurchaseOrderService } from 'src/app/erp-services/vendor-management/direct-supplier-purchase-order/direct-supplier-order.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  displayedColumns = ['poNumber','quotationId', 'supplierId', 'grandTotal', 'poDate', 'approvalStatusId','action', 'view'];
  dataSource: MatTableDataSource<DirectSupplierPOModel>;
  public pageSize=5;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public product = { id:'1', name:"Angular"};
  constructor(private data:DirectSuppliePurchaseOrderService, 
    private router : Router, private route : ActivatedRoute ) {
    
    
  }
  ngOnInit(): void {
  }

loaddata()
{
  this.data.getdirectsupplierpo().subscribe({
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
