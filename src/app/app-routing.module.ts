import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { SerieComponent } from "./components/serie/serie.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'popularMovies', component: PeliculasComponent },
  { path: 'popularSeries', component: SeriesComponent},
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'serie', component: SerieComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
