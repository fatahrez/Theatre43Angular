import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../core/services/movie-service.service';
import { Movie } from '../movie';
import { MovieService } from '../movie-service/movie.service';
import { Quote } from '../quote-class/quote';
import { QuoteService } from '../quote-service/quote.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  cinema = "iMax"
  color = "#FFFF00"
  quote: any;
  movies2: any;
 
  constructor(
    private movieService: MovieService,
    private quoteService: QuoteService,
    private movieServiceService: MovieServiceService
  ) { }
  movies = this.movieService.getMovies();

  toggleMovie(index: any) {
    this.movies[index].showDescription = !this.movies[index].showDescription;
  }

  deleteMovie(isPremierTimeOver: any, index: any) {
    if(isPremierTimeOver) {
      const toDelete = confirm('Are you sure you want to delete this movie');
      if(toDelete) {
        this.movies.splice(index, 1)
      }
    }
  }

  addNewMovie(movie: Movie) {
    const moviesLength = this.movies.length;
    movie.id = moviesLength+1;
    movie.viewDate = new Date(movie.viewDate);
    this.movies.push(movie);
  }

  getAllMovies(): void {
    this.movieServiceService.getMovieList().subscribe(data => {
      this.movies2 = data.results;
      console.log(this.movies2);
    })
  }


  ngOnInit() {
    this.quoteService.getQuote();
    this.quote = this.quoteService.quote

    this.getAllMovies()
  }

}
