import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmingRoutingModule } from './farming-routing.module';

//components
import {CultivoComponent} from './cultivo.component'
import { TabsComponent } from './tabs/tabs.component';
import {PlaguesAndDiseasesComponent} from './components/plagues-and-diseases/plagues-and-diseases.component';
import {MotherPlantsComponent} from './components/mother-plants/mother-plants.component';
import {TraceabilityComponent} from './components/traceability/traceability.component';
import {SeedtimeComponent} from './components/seedtime/seedtime.component';
import {CuttingComponent} from './components/cutting/cutting.component';

@NgModule({
  declarations: [
    CultivoComponent,
    TabsComponent,
    PlaguesAndDiseasesComponent,
    MotherPlantsComponent,
    TraceabilityComponent,
    SeedtimeComponent,
    CuttingComponent
  ],
  imports: [
    CommonModule,
    FarmingRoutingModule
  ],
  bootstrap: [CultivoComponent]
})
export class FarmingModule { }
