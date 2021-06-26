import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaumpusComponent } from './campus.component';

describe('SedeComponent', () => {
  let component: CaumpusComponent;
  let fixture: ComponentFixture<CaumpusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaumpusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaumpusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
