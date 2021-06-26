import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Output() subModuleChosen = new EventEmitter<string>();
  @Input('subModules') subModules: Array<string> = [];


  public subModuleSelected: string = '';

  constructor() { }

  ngOnInit(): void {
    this.subModuleSelected = this.subModules[0];
    console.log('subModules', this.subModules)
  }

  selectSubmodule(submodule: string) {
    this.subModuleSelected = submodule;
    this.subModuleChosen.emit(submodule)
  }

}
