import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url =
    'https://api.themoviedb.org/3/authentication/token/';
  private apikey = '123d053e1137add81e94946418ea730b';
  private request_toquen = '';
  userToken: any = '';
  constructor(private httpClient: HttpClient) {
    this.getToken();
    this.tmdbTokenSession().subscribe();
  }

  login(usuario: UsuarioModel) {
    let body = {
      ...usuario,
      request_token: this.request_toquen
    };
    return this.httpClient.post(
      `${this.url}validate_with_login?api_key=${this.apikey}`,
      body
    ).pipe( map( (res: any) => {
      this.setToken(res.request_token);
      return res;
    }));
  }

  logout() {
    localStorage.removeItem('token');
  }
  
  private setToken(token: string) {
    this.userToken = token;
    localStorage.setItem('token', this.userToken);
  }

  getToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  tmdbTokenSession() {
     return this.httpClient.get(`${this.url}new?api_key=${this.apikey}`).pipe(
       map((res: any) => {
         this.request_toquen = res.request_token;
       })
     );
  }
}
