import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectSupplierQuotationComponent } from './direct-supplier-quotation.component';
import { SupplierQuotationCreateComponent } from './supplier-quotation-create/supplier-quotation-create.component';
import { SupplierQuotationEditComponent } from './supplier-quotation-edit/supplier-quotation-edit.component';

const routes: Routes = [
  {
  path:'',component:DirectSupplierQuotationComponent
},
{
  path:'edit/:id',component:SupplierQuotationEditComponent
},
{
  path:'create',component:SupplierQuotationCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectSupplierQuotationRoutingModule { }
