import { Component, OnInit } from '@angular/core';
import { NowPlayingWrapper } from '../core/models/now-playing-wrapper.model';
import { MovieServiceService } from '../core/services/movie-service.service';
import { NowPlayingServiceService } from '../core/services/now-playing-service.service';
import { Movie } from '../movie';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [MovieServiceService]
})
export class MovieComponent implements OnInit {

  cinema = "iMax"
  color = "#fff"
  quote: any;
  listTitle: string = '';
  movies2: any;
  nowPlayingMovies: any;

 
  constructor(
    private quoteService: QuoteService,
    private movieServiceService: MovieServiceService,
    private nowPlayingService: NowPlayingServiceService
  ) { }
  // movies = this.movieService.getMovies();

  toggleMovie(index: any) {
    this.movies2[index].showDescription = !this.movies2[index].showDescription;
  }

  deleteMovie(isPremierTimeOver: any, index: any) {
    if(isPremierTimeOver) {
      const toDelete = confirm('Are you sure you want to delete this movie');
      if(toDelete) {
        this.movies2.splice(index, 1)
      }
    }
  }

  addNewMovie(movie: Movie) {
    const moviesLength = this.movies2.length;
    movie.id = moviesLength+1;
    this.movies2.push(movie);
  }

  getAllMovies(): void {
    this.movieServiceService.getMovieList().subscribe(data => {
      this.movies2 = data.results;
      this.listTitle = data.name;
      console.log(this.movies2);
    });
  }

  getNowPlayingMovies(): void {
    this.nowPlayingService.getNowPlayingList().subscribe(data => {
      this.nowPlayingMovies = data.results;
    })
  }


  ngOnInit() {
    this.quoteService.getQuote();
    this.quote = this.quoteService.quote;

    this.getAllMovies();
    this.getNowPlayingMovies();
  }

}
