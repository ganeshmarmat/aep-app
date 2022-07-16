import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorageService } from './erp-services/token-storage/token-storage.service';
import { authInterceptorProviders } from './common/auth/auth.interceptor';
import { NavigationControlComponent } from './common/controls/navigation-control/navigation-control/navigation-control.component';

import { MaterialExampleModule } from './common/ngmaterial/materialex.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationControlComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TokenStorageService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
