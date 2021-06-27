import { Component, OnInit } from '@angular/core';
import {CultivoService} from '../../../../../services/cultivo.service';
import {variablesGlobales} from '../../../../../services/variablesGlobales';
import { Router, ActivatedRoute } from '@angular/router';
import {ExcelService} from '../../../../../services/excel.service';

//especies
import {especiesTrazabilidad} from './models/especiesTrazabilidad'
import {especiesPYE} from './models/especiesPYE';
import {especiesSiembra} from './models/especiesSiembra';

//flores
import {floresCorte} from './models/floresCorte';
import {floresPYE} from './models/floresPYE';
import {floresTrazabilidad} from './models/floresTrazabilidad';
import {floresSiembra} from './models/floresSiembra';

import { DeviceDetectorService } from 'ngx-device-detector';
import { fechas } from '../../../../common/fechas';

@Component({
  selector: 'app-plagues-and-diseases',
  templateUrl: './plagues-and-diseases.component.html',
  styleUrls: ['./plagues-and-diseases.component.scss']
})
export class PlaguesAndDiseasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
