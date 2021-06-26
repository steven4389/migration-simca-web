import { Component, OnInit } from '@angular/core';
import { FarmingSubModules } from './enums/farmingSubModules'

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit {

  public subModules = Object.values(FarmingSubModules);

  public subModuleSelected: string = FarmingSubModules.PLAGUES_AND_DISEASES;

  constructor() {
  }

  ngOnInit() {

  }

  subModuleSelectedListener(subModule: string) {
    console.log('listener', subModule);
    this.subModuleSelected = subModule;
  }

}

