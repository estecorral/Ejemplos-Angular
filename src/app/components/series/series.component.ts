import { Component, OnInit } from '@angular/core';
import { SeriesService } from "../../services/series.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  seriesList: any = [];
  pages: number = 0;
  page: number = 0;
  loading: boolean = true;

  constructor(private seriesService: SeriesService, private router: Router) {
    this.seriesService.getPopular().subscribe((data: any) => {
      this.seriesList = data.results;
      this.pages = data.total_pages;
      this.page = data.page;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  getMasSeries() {
    this.seriesService.getPopular(this.page + 1).subscribe((data: any) => {
      this.seriesList = this.seriesList.concat(data.results);
      this.page = data.page;
    });
  }

  sendParams(id: string) {
    this.router.navigate(['/serie'], { queryParams: { id: id } });
  }
}
