import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillOfMaterialModule } from './bill-of-material/bill-of-material.module';

const routes: Routes = [
  { path: 'billofmaterial', loadChildren:()=>BillOfMaterialModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
