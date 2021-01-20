import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root',
})
export class PeliculasServiceService {
  private apiURL = 'https://api.themoviedb.org/3/movie';
  private apiKey = '123d053e1137add81e94946418ea730b';
  public popular: any = [];
  private language = 'es-ES';

  constructor(private httpClient: HttpClient) {}

  getPopular() {
    const url = `${this.apiURL}/popular?api_key=${this.apiKey}&language=${this.language}&page=1`;
    return this.httpClient.get(url).pipe( map((data: any) => {
    return data.results.slice(0, 5);
  }));
  }

  getNewMovies(page?: number) {
    let url = '';
    if (page) {
      url = `${this.apiURL}/upcoming?api_key=${this.apiKey}&language=${this.language}&page=${page}`;
    } else {
      url = `${this.apiURL}/upcoming?api_key=${this.apiKey}&language=${this.language}&page=1`;
    }
    return this.httpClient.get(url).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }

  getMovie(id: string) {
    const url = `${this.apiURL}/${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.httpClient.get(url);
  }

  getCredits(id: string) {
    const url = `${this.apiURL}/${id}/credits?api_key=${this.apiKey}&language=${this.language}`;
    return this.httpClient.get(url).pipe(
      map((data: any) => {
        return data.cast;
      })
    );
  }
}
