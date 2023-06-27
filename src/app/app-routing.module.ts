import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselPlanetsComponent } from './inicio/carousel-planets/carousel-planets.component';

const routes: Routes = [
  { path: '', component: CarouselPlanetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
