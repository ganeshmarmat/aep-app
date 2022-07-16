import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
  { path: 'enquiry', component: EnquiryComponent },
  {path:'quotation', component:QuotationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
