import { Component, OnInit } from '@angular/core';
import { SeriesService } from "../../services/series.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit {
  seriesList: any = [];
  pages: number = 0;
  page: number = 0;

  constructor(private seriesService: SeriesService) { 
        this.seriesService.getPopular().subscribe((data: any) => {
          this.seriesList = data.results;
          console.log(data);
          this.pages = data.total_pages;
          this.page = data.page;
        });
  }

  ngOnInit(): void {
  }

  getMasSeries() {
  this.seriesService.getPopular(this.page + 1).subscribe((data: any) => {
        this.seriesList = this.seriesList.concat(data.results);
        this.page = data.page;
      });
    }
}
