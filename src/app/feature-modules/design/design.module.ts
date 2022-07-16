import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardRoutingModule } from 'src/app/layout/dashboard/dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { HttpClientModule } from '@angular/common/http';
import { DesignRoutingModule } from './design-routing.module';
import { BillOfMaterialModule } from './bill-of-material/bill-of-material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,BrowserModule,DesignRoutingModule,
    MatNativeDateModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[BillOfMaterialModule]
})
export class DesignModule { }
