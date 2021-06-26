import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LandingPageComponent } from './public/landing-page/landing-page.component'
import { LoginComponent } from './private/login/login.component'
import { CaumpusComponent } from './private/campus/campus.component'
import { DashboardComponent } from './private/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'campus', component: CaumpusComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'farming',
        loadChildren: () => import("./private/modules/farming/farming.module").then(m => m.FarmingModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import("./private/modules/inventory/inventory.module").then(m => m.InventoryModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
