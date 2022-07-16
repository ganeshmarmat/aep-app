import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomAuthGuard } from './custom-auth.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CSIModule } from './feature-modules/csi/csi.module';
import { CustomerModule } from './feature-modules/customer/customer.module';
import { QuotationComponent } from './feature-modules/customer/quotation/quotation.component';
import { DesignModule } from './feature-modules/design/design.module';
import { VendorManagementModule } from './feature-modules/vendor-management/vendor-management.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'',redirectTo:"/dashboard" ,pathMatch: 'full',},
  {
    path:'dashboard',//redirectTo:'/dashboard', pathMatch: 'full',
    component: DashboardComponent,  canActivate: [CustomAuthGuard],
    children:[
      {
        path:'customer',loadChildren:()=>CustomerModule
      },
      {
        path:'csi',loadChildren:()=>CSIModule
      },
      {
        path:'design',loadChildren:()=>DesignModule
      },
      {
        path: 'vendor', loadChildren:()=>VendorManagementModule
      }
    ]
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
