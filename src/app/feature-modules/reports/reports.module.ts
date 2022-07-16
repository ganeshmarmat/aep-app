import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  declarations: [EnquiryComponent, QuotationComponent],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
