import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlanetsComponent } from './info-planets.component';

describe('InfoPlanetsComponent', () => {
  let component: InfoPlanetsComponent;
  let fixture: ComponentFixture<InfoPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
