import { Component } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  constructor(public movieService: MovieService) {}

  ceil(n: number) {
    return Math.ceil(n);
  }
  nextPage() {
    this.movieService.loadNextPage();
  }

  previousPage() {
    this.movieService.loadPreviousPage();
  }

  selectMovie(movie: Movie): void {
    this.movieService
      .getMovieById(movie.imdbID || '')
      .subscribe((resp) => (this.movieService.selectedMovie = resp));
  }
}
