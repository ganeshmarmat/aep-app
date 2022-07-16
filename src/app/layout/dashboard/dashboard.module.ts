import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from 'src/app/common/controls/header/header.component';
import { MenubarComponent } from 'src/app/common/controls/menubar/menubar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/common/ngmaterial/materialex.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    MenubarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent,MenubarComponent,HeaderComponent],
  exports:[DashboardComponent,MenubarComponent,HeaderComponent]
})
export class DashboardModule { }
