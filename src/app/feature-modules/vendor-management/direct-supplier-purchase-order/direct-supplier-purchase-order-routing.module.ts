import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectSupplierPurchaseOrderComponent } from './direct-supplier-purchase-order.component';

const routes: Routes = [{
  path:'',component:DirectSupplierPurchaseOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectSupplierPurchaseOrderRoutingModule { }
