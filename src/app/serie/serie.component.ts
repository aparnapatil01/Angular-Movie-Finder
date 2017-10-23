import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
	serie: Object;
	video: Object;

  constructor(
  	private _moviesService: MoviesService,
  	private router: ActivatedRoute,
  	private sanitizer: DomSanitizer
  ) { 
  	this.router.params.subscribe((params) => {
  		const id = params["id"];

  		this._moviesService.getSerieDetails(+id).subscribe((res) => {
  			this.serie = res;
  		});
  		this._moviesService.getSerieVideos(+id).subscribe((res) => {
  			this.video = res.results[0];

  			this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
  		})
  	});
  }

  ngOnInit() {
  }

}