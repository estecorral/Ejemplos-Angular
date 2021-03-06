import { Component, OnInit } from '@angular/core';
import { PeliculasServiceService } from '../../services/peliculas-service.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  moviesList: any = [];
  page: number = 0;
  pages: number = 0;
  loading: boolean = true;

  constructor(private peliculasService: PeliculasServiceService) {
    this.peliculasService.getNewMovies().subscribe((data: any) => {
      this.moviesList = data.results;
      this.pages = data.total_pages;
      this.page = data.page;
      this.loading = false;
    });
  }

  ngOnInit(): void {
   
  }

  getMasPeliculas() {
    this.peliculasService.getNewMovies(this.page + 1).subscribe((data: any) => {
      this.moviesList = this.moviesList.concat(data.results);
      this.page = data.page;
    });
  }
}
