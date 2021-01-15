import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { MaterialModule } from './modules/material/material.module';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SerieComponent } from './components/serie/serie.component';

// Services
import { PeliculasServiceService } from "./services/peliculas-service.service";
import { SeriesService } from "./services/series.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    HomeComponent,
    SeriesComponent,
    PeliculasComponent,
    PeliculaComponent,
    SerieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ 
    PeliculasServiceService,
    SeriesService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
