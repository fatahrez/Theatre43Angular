import { Component, OnInit } from '@angular/core';
import { NowPlayingWrapper } from '../core/models/now-playing-wrapper.model';
import { MovieServiceService } from '../core/services/movie-service.service';
import { NowPlayingServiceService } from '../core/services/now-playing-service.service';
import { PopularServiceService } from '../core/services/popular-service.service';
import { Movie } from '../movie';
import { QuoteService } from '../quote-service/quote.service';
import {List2Service} from '../core/services/list2.service';
import {List3Service} from '../core/services/list3.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieServiceService]
})
export class MovieComponent implements OnInit {

  cinema = 'iMax';
  color = '#fff';
  quote: any;
  listTitle = '';
  movies2: any;
  nowPlayingMovies: any;
  popularMovies: any;
  list2Title = '';
  list2Movies: any;
  list3Title = '';
  list3Movies: any;


  constructor(
    private quoteService: QuoteService,
    private movieServiceService: MovieServiceService,
    private nowPlayingService: NowPlayingServiceService,
    private popularService: PopularServiceService,
    private list2Service: List2Service,
    private list3Service: List3Service
  ) { }
  // movies = this.movieService.getMovies();

  toggleMovie(index: any): void {
    this.movies2[index].showDescription = !this.movies2[index].showDescription;
  }

  deleteMovie(isPremierTimeOver: any, index: any): void {
    if (isPremierTimeOver) {
      const toDelete = confirm('Are you sure you want to delete this movie');
      if (toDelete) {
        this.movies2.splice(index, 1);
      }
    }
  }

  addNewMovie(movie: Movie): void {
    const moviesLength = this.movies2.length;
    movie.id = moviesLength + 1;
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
    });
  }

  getPopularMovies(): void {
    this.popularService.getPopularList().subscribe(data => {
      this.popularMovies = data.results;
    });
  }

  getList2Movies(): void {
    this.list2Service.getList2List().subscribe(data => {
      this.list2Movies = data.results;
      this.list2Title = data.name;
    });
  }

  getList3Movies(): void {
    this.list3Service.getList3List().subscribe(data => {
      this.list3Movies = data.results;
      this.list3Title = data.name;
    });
  }

  ngOnInit(): void {
    this.quoteService.getQuote();
    this.quote = this.quoteService.quote;

    this.getNowPlayingMovies();
    this.getPopularMovies();
    this.getAllMovies();
    this.getList2Movies();
    this.getList3Movies();
  }

}
