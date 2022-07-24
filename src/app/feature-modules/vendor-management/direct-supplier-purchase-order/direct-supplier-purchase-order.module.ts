import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DirectSupplierPurchaseOrderRoutingModule } from "./direct-supplier-purchase-order-routing.module";
import { MaterialExampleModule } from "src/app/common/ngmaterial/materialex.module";
import { DirectSupplierPurchaseOrderComponent } from "./direct-supplier-purchase-order.component";
import { InProgressComponent } from "./in-progress/in-progress.component";
import { CompletedComponent } from "./completed/completed.component";
import { SupplierPurchaseEditComponent } from "./supplier-purchase-edit/supplier-purchase-edit.component";
import { SupplierPoCreateComponent } from "./supplier-po-create/supplier-po-create.component";
import { PendingApprovalComponent } from "./pending-approval/pending-approval.component";
import { RejectedComponent } from './rejected/rejected.component';

@NgModule({
  declarations: [
    DirectSupplierPurchaseOrderComponent,
    InProgressComponent,
    CompletedComponent,
    SupplierPurchaseEditComponent,
    SupplierPoCreateComponent,
    PendingApprovalComponent,
    RejectedComponent,
  ],
  imports: [
    CommonModule,
    DirectSupplierPurchaseOrderRoutingModule,
    MaterialExampleModule,
  ],
  exports: [DirectSupplierPurchaseOrderComponent],
})
export class DirectSupplierPurchaseOrderModule {}
