import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselPlanetsComponent } from './inicio/carousel-planets/carousel-planets.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoPlanetsComponent } from './inicio/info-planets/info-planets.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPlanetsComponent,
    InfoPlanetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    NgbCarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
