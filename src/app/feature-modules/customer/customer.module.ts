import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { QuotationComponent } from './quotation/quotation.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [EnquiryComponent, QuotationComponent],
  imports: [
    CommonModule,CustomerRoutingModule
  ],
  exports:[EnquiryComponent, QuotationComponent]
})
export class CustomerModule { }
