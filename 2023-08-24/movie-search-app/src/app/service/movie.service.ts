import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://www.omdbapi.com';
const apikey = 'aa9e49f';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Array<Movie> | undefined;

  constructor(private http: HttpClient) {}

  searchMovies(searchText: string): void {
    const url = `${baseUrl}?apikey=${apikey}&s=${searchText}`;

    this.http.get(url).subscribe((resp: any) => (this.movies = resp.Search));
  }

  get movieList(): Array<Movie> | undefined {
    return this.movies;
  }
}
