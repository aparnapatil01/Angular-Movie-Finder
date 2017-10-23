import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
	person:Object;
	movies: Array<Object>;

  constructor(
  	private _moviesService: MoviesService,
  	private router: ActivatedRoute
  ) { 
  	this.router.params.subscribe((params) => {
  		const id = params['id'];

  		this._moviesService.getPersonDetail(+id).subscribe((res) => {
  			this.person = res;
  		});
  		this._moviesService.getPersonCast(+id).subscribe((res) =>{
  			this.movies = res.cast;
  		});
  	});
  }

  ngOnInit() {
  }

}