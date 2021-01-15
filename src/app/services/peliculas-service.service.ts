import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import movies from '../../assets/movies.json';

@Injectable({
  providedIn: 'root',
})
export class PeliculasServiceService {
  private apiURL = 'https://api.themoviedb.org/3/movie';
  public popular: any = [];
  private language = 'es-ES';

  constructor(private httpClient: HttpClient) {
  }

   getPopular() {
    const url = `${this.apiURL}/popular?api_key=123d053e1137add81e94946418ea730b&language=${this.language}&page=1`;
    return this.httpClient.get(url);
  }

  getNewMovies() {
    const url = `${this.apiURL}/upcoming?api_key=123d053e1137add81e94946418ea730b&language=${this.language}&page=1`;
    return this.httpClient.get(url);
  }
}
