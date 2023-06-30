import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselPlanetsComponent } from './inicio/carousel-planets/carousel-planets.component';
import { InfoPlanetsComponent } from './inicio/info-planets/info-planets.component';

const routes: Routes = [
  { path: '', component: CarouselPlanetsComponent },
  { path: 'infoPlanets', component: InfoPlanetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
