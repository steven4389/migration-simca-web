import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmingRoutingModule } from './farming-routing.module';

//components
import {CultivoComponent} from './cultivo.component'
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CultivoComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    FarmingRoutingModule
  ],
  bootstrap: [CultivoComponent]
})
export class FarmingModule { }
