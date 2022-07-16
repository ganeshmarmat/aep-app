import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillOfMaterialComponent } from './bill-of-material.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardRoutingModule } from 'src/app/layout/dashboard/dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { HttpClientModule } from '@angular/common/http';
import { BillOfMaterialRoutingModule } from './bill-of-material-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    BillOfMaterialComponent],
  imports: [
    BillOfMaterialRoutingModule,BrowserModule,
    MaterialExampleModule,
    ReactiveFormsModule
  ],exports:[BillOfMaterialComponent]
  ,bootstrap:[BillOfMaterialComponent]
})
export class BillOfMaterialModule { }
