import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectSupplierQuotationRoutingModule } from './direct-supplier-quotation-routing.module';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { DirectSupplierQuotationComponent } from './direct-supplier-quotation.component';
import { SupplierQuotationEditComponent } from './supplier-quotation-edit/supplier-quotation-edit.component';
import { CompletedComponent } from './completed/completed.component';
import { QuationInfoComponent } from './supplier-quotation-create/quation-info/quation-info.component';
import { SupplierQuotationCreateComponent } from './supplier-quotation-create/supplier-quotation-create.component';
// import { InProgressComponent } from './in-progress/in-progress.component';
// import { CompletedComponent } from './completed/completed.component';
// import { SupplierPurchaseEditComponent } from './supplier-purchase-edit/supplier-purchase-edit.component';


@NgModule({
  declarations: [DirectSupplierQuotationComponent, SupplierQuotationCreateComponent, SupplierQuotationEditComponent, CompletedComponent, QuationInfoComponent],
  imports: [
    CommonModule,
    DirectSupplierQuotationRoutingModule,MaterialExampleModule
  ],exports:[DirectSupplierQuotationComponent, SupplierQuotationEditComponent, SupplierQuotationCreateComponent, QuationInfoComponent]
})
export class DirectSupplierQuotationModule { }
