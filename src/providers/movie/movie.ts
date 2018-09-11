import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private MOVIE_DB_API_KEY:string = "e8eadcec1bbbb52fc59131bbe28e1005";
  private MOVIE_DB_BASE_URL:string = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page){
    return this.http.get(this.MOVIE_DB_BASE_URL + "/movie/popular"+`?api_key=${this.MOVIE_DB_API_KEY}&page=${page}`)
  }

  getMovieById(id){
    return this.http.get(this.MOVIE_DB_BASE_URL + `/movie/${id}`+`?api_key=${this.MOVIE_DB_API_KEY}`)
  }

}
