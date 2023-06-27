import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlanetsComponent } from './carousel-planets.component';

describe('CarouselPlanetsComponent', () => {
  let component: CarouselPlanetsComponent;
  let fixture: ComponentFixture<CarouselPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPlanetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
