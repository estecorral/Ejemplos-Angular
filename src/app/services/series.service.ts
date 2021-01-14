import { Injectable } from '@angular/core';
import series from "../../assets/series.json";
@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  getFiveSeries() {
    return series.slice(0, 5);
  }

  getSeries() {
    return series;
  }
}
