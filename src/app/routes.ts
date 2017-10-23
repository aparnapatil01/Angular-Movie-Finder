import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { GenresComponent } from './genres/genres.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

export const appRoutes:Routes =  [
	{
		path: 'movie/:id',
		component: MovieComponent
	},
	{
		path: 'person/:id',
		component: ActorComponent
	},
	{
		path:'genre/:id/:name',
		component: GenresComponent
	},
	{
		path: 'popular/series',
		component: PopularSeriesComponent
	},
	{
		path: 'tv/:id',
		component: SerieComponent
	},
	{
		path: 'upcoming',
		component: UpcomingComponent
	},
	{
		path: '',
		component: MoviesComponent
	}
]