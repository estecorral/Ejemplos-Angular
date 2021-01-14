import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PeliculasServiceService } from "../../services/peliculas-service.service";
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  constructor(private router: Router, private peliculasServive: PeliculasServiceService,
    private seriesService: SeriesService) {
  }

  ngOnInit(): void {
  }

  sendParams(id: string, name: string) {
    this.router.navigate(['/serie'], { queryParams: { 'id': id, 'name': name}});
  }

  getMovies() {
    return this.peliculasServive.getFiveMovies();
  }

  getSeries() {
    return this.seriesService.getFiveSeries();
  }
}
