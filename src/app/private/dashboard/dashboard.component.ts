import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public FARMING:string = 'Cultivo';
  public INVENTORY:string = 'Inventario';

  constructor( private activatedRoute: ActivatedRoute,  private router: Router) { }

  ngOnInit(): void {
  }

  selectModule(module:string){
    module === this.FARMING && this.router.navigate(['/dashboard/farming'], { relativeTo: this.activatedRoute });
    module === this.INVENTORY && this.router.navigate(['/dashboard/inventory'], { relativeTo: this.activatedRoute });
  }

}
