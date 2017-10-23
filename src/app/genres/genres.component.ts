import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
	movies: Array<Object>
	title: string;

  constructor( 
  	private _moviesService: MoviesService,
  	private router: ActivatedRoute
  ) { 
  	this.router.params.subscribe((params) => {
  		const id = params["id"];
  		this.title = params["name"];

  		this._moviesService.getMoviesByGenre(+id).subscribe((res) => {
  			this.movies = res.results;
  		})
  	})
  }

  ngOnInit() {
  }

}
