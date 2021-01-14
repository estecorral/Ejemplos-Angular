import { Injectable } from '@angular/core';
import movies from '../../assets/movies.json';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {
  constructor() { }

  getFiveMovies () {
    // console.log(movies)
    return movies.slice(0, 5);
  }

  getMovies() {
    return movies;
  }
}
