import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-planets',
  templateUrl: './carousel-planets.component.html',
  styleUrls: ['./carousel-planets.component.scss']
})
export class CarouselPlanetsComponent{

  images = [
    {name: 'assets/tierra.png', who: 'Planet', info: 'Earth' },
    {name: 'assets/lunaaa.png', who: 'Satelite', info: 'Moon' },
    {name: 'assets/marte.png', who: 'Planet', info: 'Mars' },
  ];
 
}
