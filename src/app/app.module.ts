import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesService } from './movies.service';
import { ActorComponent } from './actor/actor.component';
import { GenresComponent } from './genres/genres.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    MovieCardComponent,
    ActorComponent,
    GenresComponent,
    PopularSeriesComponent,
    SerieComponent,
    UpcomingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
