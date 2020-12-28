import { Component, OnInit } from '@angular/core';
import movies from 'src/assets/movies.json';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  moviesList: any = movies;
  constructor() {
    console.log(this.moviesList);
  }

  ngOnInit(): void {}
}
