import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectSupplierPurchaseOrderComponent } from './direct-supplier-purchase-order.component';
import { SupplierPoCreateComponent } from './supplier-po-create/supplier-po-create.component';
import { SupplierPurchaseEditComponent } from './supplier-purchase-edit/supplier-purchase-edit.component';

const routes: Routes = [
  {
  path:'',component:DirectSupplierPurchaseOrderComponent
},
{
  path:'edit/:id',component:SupplierPurchaseEditComponent
},
{
  path:'create',component:SupplierPoCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectSupplierPurchaseOrderRoutingModule { }
