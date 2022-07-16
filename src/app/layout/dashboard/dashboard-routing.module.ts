import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CSIModule } from "src/app/feature-modules/csi/csi.module";
import { CustomerModule } from "src/app/feature-modules/customer/customer.module";
import { EnquiryComponent } from "src/app/feature-modules/customer/enquiry/enquiry.component";
import { DesignModule } from "src/app/feature-modules/design/design.module";
import { VendorManagementModule } from "src/app/feature-modules/vendor-management/vendor-management.module";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "customer",
        loadChildren: () => CustomerModule,
      },
      {
        path: "csi",
        loadChildren: () => CSIModule,
      },
      {
        path: "design",
        loadChildren: () => DesignModule,
      },
      {
        path: "vendor",
        loadChildren: () => VendorManagementModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
