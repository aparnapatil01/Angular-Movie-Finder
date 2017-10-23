import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
	upcoming: Array<Object>;
	searchRes: Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) { 
  	this._moviesService.getUpcomingMovies().subscribe((res) => {
  		this.upcoming = res.results;
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
