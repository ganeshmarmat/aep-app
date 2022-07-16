import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleRoutingModule } from './role-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardRoutingModule } from 'src/app/layout/dashboard/dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RoleDetailComponent
  ],
  imports: [
    CommonModule,RoleRoutingModule,
    BrowserModule,
    MatNativeDateModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],exports:[RoleDetailComponent]
})
export class RoleModule { }
