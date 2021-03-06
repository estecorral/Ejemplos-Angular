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
import { LoadingComponent } from './components/loading/loading.component';
import { LoginPlantillaComponent } from './components/login-plantilla/login-plantilla.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginReactivoComponent } from './components/login-reactivo/login-reactivo.component';

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
    LoadingComponent,
    LoginPlantillaComponent,
    LoginReactivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    PeliculasServiceService,
    SeriesService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
