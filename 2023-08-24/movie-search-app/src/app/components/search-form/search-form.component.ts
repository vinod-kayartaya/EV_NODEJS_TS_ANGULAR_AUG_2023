import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent {
  searchText: string = '';

  constructor(public service: MovieService) {}

  submitHandler() {
    if (!this.searchText) return;

    this.service.searchMovies(this.searchText);
  }
}
