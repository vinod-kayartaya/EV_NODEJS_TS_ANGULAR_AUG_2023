import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://www.omdbapi.com';
const apikey = 'aa9e49f';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Array<Movie> | undefined;
  private _selectedMovie: Movie = new Movie();
  private _searchText: string = '';
  private _pageNum: number = 1;
  private _totalResults: number = 0;

  constructor(private http: HttpClient) {}

  searchMovies(searchText: string): void {
    this._searchText = searchText;
    this.loadMovies();
  }

  get pageNum(): number {
    return this._pageNum;
  }

  get totalResults(): number {
    return this._totalResults;
  }

  loadNextPage() {
    this._pageNum++;
    this.loadMovies();
  }

  loadPreviousPage() {
    if (this._pageNum === 1) return;

    this._pageNum--;
    this.loadMovies();
  }

  loadMovies() {
    const url = `${baseUrl}?apikey=${apikey}&s=${this._searchText}&page=${this._pageNum}`;
    this.http.get(url).subscribe((resp: any) => {
      this.movies = resp.Search;
      this._totalResults = resp.totalResults;
    });
  }

  getMovieById(imdbID: string): Observable<Movie> {
    const options = {
      params: {
        apikey,
        i: imdbID,
      },
    };

    return this.http.get(baseUrl, options);
  }

  get movieList(): Array<Movie> | undefined {
    return this.movies;
  }

  get selectedMovie(): Movie {
    return this._selectedMovie;
  }

  set selectedMovie(value: Movie) {
    this._selectedMovie = value;
  }
}
