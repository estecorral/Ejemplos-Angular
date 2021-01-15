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
  popular: any = [];
  constructor(private router: Router, private peliculasService: PeliculasServiceService,
    private seriesService: SeriesService) {
      this.peliculasService.getPopular().subscribe((data: any) => {
        this.popular = data.results.slice(0, 5);
      });
  }

  ngOnInit(): void {
  }

  sendParams(id: string, name: string) {
    this.router.navigate(['/serie'], { queryParams: { 'id': id, 'name': name}});
  }

  getMovies() {
    return this.popular;
  }

  getSeries() {
    return this.seriesService.getFiveSeries();
  }
}
