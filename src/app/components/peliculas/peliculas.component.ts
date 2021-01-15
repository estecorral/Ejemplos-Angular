import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../services/peliculas-service.service';
import movies from 'src/assets/movies.json';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  moviesList: any = [];
  columnas: number = 2;
  constructor(private peliculasService: PeliculasServiceService) {
    this.peliculasService.getNewMovies().subscribe((data: any) => {
      this.moviesList = data.results;
      console.log(data.results);
    });
  }

  ngOnInit(): void {
    this.columnas = window.innerWidth <= 1400 ? 3 : 4;
  }

  onResize(e: any) {
    if (e.target.innerWidth <= 1400 && e.target.innerWidth > 1100) {
      this.columnas = 3;
    } else if (e.target.innerWidth <= 1100 && e.target.innerWidth > 750) {
      this.columnas = 2;
    } else if (e.target.innerWidth <= 750) {
      this.columnas = 1;
    } else {
      this.columnas = 4;
    }
  }
}
