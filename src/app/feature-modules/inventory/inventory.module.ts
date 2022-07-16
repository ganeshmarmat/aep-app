import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodReceiveComponent } from './good-receive/good-receive.component';
import { MaterialIssueComponent } from './material-issue/material-issue.component';
import { MaterialStockComponent } from './material-stock/material-stock.component';
import { ReturnOrderComponent } from './return-order/return-order.component';
import { WarehouseTransferComponent } from './warehouse-transfer/warehouse-transfer.component';
import { StoreReturnsComponent } from './store-returns/store-returns.component';

@NgModule({
  declarations: [
    GoodReceiveComponent,
    MaterialIssueComponent,
    MaterialStockComponent,
    ReturnOrderComponent,
    WarehouseTransferComponent,
    StoreReturnsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModule { }
