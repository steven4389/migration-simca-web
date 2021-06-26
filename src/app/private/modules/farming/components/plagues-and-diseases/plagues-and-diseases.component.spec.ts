import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaguesAndDiseasesComponent } from './plagues-and-diseases.component';

describe('PlaguesAndDiseasesComponent', () => {
  let component: PlaguesAndDiseasesComponent;
  let fixture: ComponentFixture<PlaguesAndDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaguesAndDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaguesAndDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
