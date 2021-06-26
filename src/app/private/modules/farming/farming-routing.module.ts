import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CultivoComponent} from './cultivo.component'

const routes: Routes = [
  {
    path: '',
    component: CultivoComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmingRoutingModule { }
