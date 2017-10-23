import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../app/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})  
export class MoviesComponent implements OnInit {
  topRatedList: Array<Object>
  popularList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor( private _moviesService :MoviesService ) { 
    this._moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res.results;
    });

    this._moviesService.getPopularMovies().subscribe(res => {
      this.popularList = res.results;
    });
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

  ngOnInit() { 
  }

}