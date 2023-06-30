import { Component } from '@angular/core';

@Component({
  selector: 'app-info-planets',
  templateUrl: './info-planets.component.html',
  styleUrls: ['./info-planets.component.scss']
})
export class InfoPlanetsComponent {

  infoPlanets = [
    {name: 'assets/infoPlanets/earth.png', who: 'Planet', info: 'Earth' },
    {name: 'assets/infoPlanets/moon.png', who: 'Planet', info: 'Earth' },
    {name: 'assets/infoPlanets/mars.png', who: 'Planet', info: 'Earth' },

  ];
}
