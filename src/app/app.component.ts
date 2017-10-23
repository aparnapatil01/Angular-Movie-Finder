import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genres: Array<Object>;

  constructor(private _moviesService: MoviesService) {
  	this._moviesService.getGenres().subscribe((res) => {
  		this.genres = res.genres;
  	})
  }
}
