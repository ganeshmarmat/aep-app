import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectSupplierPurchaseOrderRoutingModule } from './direct-supplier-purchase-order-routing.module';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { DirectSupplierPurchaseOrderComponent } from './direct-supplier-purchase-order.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [DirectSupplierPurchaseOrderComponent,InProgressComponent, CompletedComponent],
  imports: [
    CommonModule,
    DirectSupplierPurchaseOrderRoutingModule,MaterialExampleModule
  ],exports:[DirectSupplierPurchaseOrderComponent,InProgressComponent]
})
export class DirectSupplierPurchaseOrderModule { }
