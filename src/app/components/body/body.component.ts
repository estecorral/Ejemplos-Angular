import { Component, OnInit } from '@angular/core';
import movies from 'src/assets/movies.json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  moviesList: any = movies;
  columnas: number = 2;
  constructor() {
  }

  ngOnInit(): void {
    this.columnas = (window.innerWidth <= 1400) ? 3 : 4;
  }

  onResize(e : any) {
    if (e.target.innerWidth <= 1400 && e.target.innerWidth > 1100) {
      this.columnas = 3;
    } else if (e.target.innerWidth <= 1100 && e.target.innerWidth > 750) {
      this.columnas = 2;
    } else if (e.target.innerWidth <=750) {
      this.columnas = 1;
    } else {
      this.columnas = 4;
    }
    console.log(e.target.innerWidth);
  }
}
