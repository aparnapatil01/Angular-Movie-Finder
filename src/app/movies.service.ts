import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
	apiKey: string; 

  constructor(private http: Http) { 	
  	this.apiKey = '4b4380db9272ac9e2c0658312992cb57';
  }

  getTopRatedMovies() {
  	let search = new URLSearchParams();
  	search.set('api_key', this.apiKey);

  	return this.http.get('https://api.themoviedb.org/3/discover/movie?', {search})
  		.map(res => {
  			return res.json();
  		})
  }

  getPopularMovies() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/popular?', {search})
      .map(res => {
        return res.json();
      })
  }

  searchMovies(searchStr: string) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);
    search.set('query', searchStr); 

    return this.http.get('https://api.themoviedb.org/3/search/movie?', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovie(movieId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(movieId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits?', {search})
      .map(res => {
        return res.json();
      })
  }

  getSimilarMovies(movieId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/similar?', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieVideos(movieId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieReviews(movieId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/reviews?', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonDetail(personId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/person/' + personId + '?', {search})
      .map(res => {
        return res.json();
      })
  }

  getPersonCast(personId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/person/' + personId + '/movie_credits?', {search})
      .map(res => {
        return res.json();
      })
  }

  getMoviesByGenre(genreId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/genre/' + genreId + '/movies?', {search})
      .map(res => {
        return res.json();
      })
  }

  getPopularSeries() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/tv/popular?', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieDetails(tvId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/tv/' + tvId + '?', {search})
      .map(res => {
        return res.json();
      })
  }

  getSerieVideos(tvId: number) {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/tv/' + tvId + '/videos?', {search})
      .map(res => {
        return res.json();
      })
  }

  getUpcomingMovies() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?', {search})
      .map(res => {
        return res.json();
      })
  }

  getGenres() {
    let search = new URLSearchParams();
    search.set('api_key', this.apiKey);

    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?', {search})
      .map(res => {
        return res.json();
      })
  }
}