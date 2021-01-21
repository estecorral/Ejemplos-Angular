import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import series from "../../assets/series.json";

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private apiURL = 'https://api.themoviedb.org/3/tv';
  private apiKey = '123d053e1137add81e94946418ea730b';
  public popular: any = [];
  private language = 'es-ES';
  constructor(private httpClient: HttpClient) {}

  getPopular(page?: number) {
    let url = '';
    if(page) {
      url = `${this.apiURL}/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`;
    } else {
      url = `${this.apiURL}/popular?api_key=${this.apiKey}&language=${this.language}&page=1`;
    }

    return this.httpClient.get(url);
  }

  getNewSeries() {
    const url = `${this.apiURL}/latest?api_key=${this.apiKey}&language=${this.language}&page=1`;
    return this.httpClient.get(url);
  }

  getSerie(id: string) {
     const url = `${this.apiURL}/${id}?api_key=${this.apiKey}&language=${this.language}&page=1`;
     return this.httpClient.get(url);
  }

  getSeasons(id: string, season: number) {
     const url = `${this.apiURL}/${id}/season/${season}?api_key=${this.apiKey}&language=${this.language}&page=1`;
     return this.httpClient.get(url);
  }
}
