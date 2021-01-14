import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import movies from 'src/assets/movies.json';
import series from 'src/assets/series.json';
import { PeliculasServiceService } from "../../services/peliculas-service.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  moviesList: any = [];
  seriesList: any = series.slice(0, 5);
  columnas: number = 2;
  constructor(private router: Router, private peliculasServive: PeliculasServiceService) {
  }

  ngOnInit(): void {
    this.columnas = (window.innerWidth <= 1400) ? 3 : 4;
  }

  sendParams(id: string, name: string) {
    this.router.navigate(['/serie'], { queryParams: { 'id': id, 'name': name}});
  }

  getMovies() {
    console.log(this.peliculasServive.getFiveMovies())
    return this.peliculasServive.getFiveMovies();
  }
}
