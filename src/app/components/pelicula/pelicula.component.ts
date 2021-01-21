import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasServiceService } from "../../services/peliculas-service.service";
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  idPelicula: string = '';
  pelicula: any = [];
  backgroundImage: string = '';
  poster: string = '';
  creditos: any = [];
  loading: boolean = true;

  constructor( private route: ActivatedRoute, private peliculasService: PeliculasServiceService) { 
       this.route.params.subscribe((data: any) => {
         this.idPelicula = data.id;
       });
       this.peliculasService
         .getMovie(this.idPelicula)
         .subscribe((data: any) => {
           this.pelicula = data;
           this.backgroundImage =
             'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
             this.pelicula.backdrop_path;
           this.poster =
             'https://image.tmdb.org/t/p/w220_and_h330_face' +
             this.pelicula.poster_path;
         }),
         (error: any) => {
           console.log(error);
         };
         this.peliculasService.getCredits(this.idPelicula).subscribe((data: any) => {
            this.creditos = data.slice(0, 5);
            this.loading = false;
         }), (error: any) => {
           console.log(error);
         };
        }

  ngOnInit(): void {
   
  }
}
