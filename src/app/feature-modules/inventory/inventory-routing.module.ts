import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodReceiveComponent } from './good-receive/good-receive.component';

const routes: Routes = [
  { path: 'good-receive', loadChildren:()=>GoodReceiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
