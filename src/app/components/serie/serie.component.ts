import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SeriesService } from "../../services/series.service";
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  serie: string = '';
  id: string = '';
  serieTV: any = {};
  backgroundImage: string = '';
  poster: string = '';
  seasonData: any = {};
  posterTemporada: string = '';
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) {
    this.route.queryParams.subscribe((params) => {
      this.serie = params.name;
      this.id = params.id;
    });
    this.seriesService.getSerie(this.id).subscribe((data: any) => {
      this.serieTV = data;
      this.backgroundImage =
        'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' + this.serieTV.backdrop_path;
        this.poster =
          'https://image.tmdb.org/t/p/w220_and_h330_face' + this.serieTV.poster_path;
      this.seriesService
        .getSeasons(this.id, this.serieTV.number_of_seasons)
        .subscribe((data: any) => {
          this.seasonData = data;
          this.posterTemporada =
            'https://image.tmdb.org/t/p/w220_and_h330_face' + this.seasonData.poster_path;
          this.loading = false;
        });
    });
   }

  ngOnInit(): void {
  }
}
