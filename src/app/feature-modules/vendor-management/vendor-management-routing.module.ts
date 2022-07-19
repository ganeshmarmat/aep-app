import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectSupplierPurchaseOrderModule } from './direct-supplier-purchase-order/direct-supplier-purchase-order.module';
import { DirectSupplierQuotationModule } from './direct-supplier-quotation/direct-supplier-quotation.module';

const routes: Routes = [
  {
  path:'direct-supplier-PO',loadChildren:()=>DirectSupplierPurchaseOrderModule
},
{
  path:'direct-supplier-quotation',loadChildren:()=>DirectSupplierQuotationModule
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
