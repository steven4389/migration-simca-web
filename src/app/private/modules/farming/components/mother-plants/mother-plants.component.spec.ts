import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherPlantsComponent } from './mother-plants.component';

describe('MotherPlantsComponent', () => {
  let component: MotherPlantsComponent;
  let fixture: ComponentFixture<MotherPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
