import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleDetailComponent } from './role-detail/role-detail.component';

const routes: Routes = [
    {
        path:'',component:RoleDetailComponent
       
    },
    {
        path:'role-details',component:RoleDetailComponent
    }
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }