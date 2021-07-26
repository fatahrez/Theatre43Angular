import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NowPlayingWrapper } from '../core/models/now-playing-wrapper.model';
import { MovieServiceService } from '../core/services/movie-service.service';
import { NowPlayingServiceService } from '../core/services/now-playing-service.service';
import { PopularServiceService } from '../core/services/popular-service.service';
import { Movie } from '../movie';
import { QuoteService } from '../quote-service/quote.service';
import { List2Service } from '../core/services/list2.service';
import { List3Service } from '../core/services/list3.service';
import { YoutubeService } from '../core/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { style, state, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [MovieServiceService],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('300ms ease', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class MovieComponent implements OnInit {

  @ViewChild('nowPlayingContent') nowPlayingContent!: ElementRef;
  @ViewChild('mostPopularContent') mostPopularContent!: ElementRef;
  @ViewChild('list2Content') list2Content!: ElementRef;
  @ViewChild('list3Content') list3Content!: ElementRef;

  @Input() youtubePlayClass = '';


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
  youtubeLink = '';
  finalLink = '';
  movieId = '';



  constructor(
    private quoteService: QuoteService,
    private movieServiceService: MovieServiceService,
    private nowPlayingService: NowPlayingServiceService,
    private popularService: PopularServiceService,
    private list2Service: List2Service,
    private list3Service: List3Service,
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer
  ) { }
  // movies = this.movieService.getMovies();

  toggleMovie(index: any): void {
    this.movies2[index].showDescription = !this.movies2[index].showDescription;
  }

  playMovie(index: any, movie: any): void {
    movie[index].playMovie = !movie[index].playMovie;
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
      // console.log(this.movies2);
    });
  }

  getNowPlayingMovies(): void {
    this.nowPlayingService.getNowPlayingList().subscribe(data => {
      this.nowPlayingMovies = data.results;
      // this.nowPlayingMovies.forEach((movie: any) => {
      // movie = this.getYoutubeLink(movie);
      // console.log('finalLink', movie);
      // });
      this.nowPlayingMovies.currentPosition = 0;
      this.nowPlayingMovies.previousPosition = 0;
      this.checkNowPlayingScrollPosition();


    });
  }

  getPopularMovies(): void {
    this.popularService.getPopularList().subscribe(data => {
      this.popularMovies = data.results;
      this.popularMovies.currentPosition = 0;
      this.popularMovies.previousPosition = 0;
      this.checkPopularScrollPosition();
    });
  }

  getList2Movies(): void {
    this.list2Service.getList2List().subscribe(data => {
      this.list2Movies = data.results;
      this.list2Title = data.name;
      this.list2Movies.currentPosition = 0;
      this.list2Movies.previousPosition = 0;
      this.checkList2ScrollPosition();
    });
  }

  getList3Movies(): void {
    this.list3Service.getList3List().subscribe(data => {
      this.list3Movies = data.results;
      this.list3Title = data.name;
      this.list3Movies.currentPosition = 0;
      this.list3Movies.previousPosition = 0;
      this.checkList3ScrollPosition();
    });
  }

  getYoutubeLink(movie: any) {
    this.finalLink = '';
    this.youtubeService.getYoutubeSearchList(movie).subscribe(data => {
      this.youtubeLink = data.results[0].key;
      this.finalLink = 'https://www.youtube.com/embed/' + this.youtubeLink + '?autoplay=1&start=0&showinfo=1&controls=0&loop=1&playlist=' + this.youtubeLink;
      this.movieId = movie;

      // console.log(this.finalLink);

    });

    // return movie;


  }

  clear(): void {
    this.finalLink = '';
    this.movieId = '';
  }


  scrollLeft(content: any): void {
    // console.log('LEFT');
    //
    if (content === 'nowPlayingContent') {
      this.nowPlayingContent.nativeElement.scrollTo({ left: (this.nowPlayingContent.nativeElement.scrollLeft + -800), behavior: 'smooth' });
      this.checkNowPlayingScrollPosition();
    }
    if (content === 'mostPopularContent') {
      this.mostPopularContent.nativeElement.scrollTo({
        left: (this.mostPopularContent.nativeElement.scrollLeft + -800),
        behavior: 'smooth'
      });
      this.checkPopularScrollPosition();
    }
    if (content === 'list2Content') {
      this.list2Content.nativeElement.scrollTo({ left: (this.list2Content.nativeElement.scrollLeft + -800), behavior: 'smooth' });
      this.checkList2ScrollPosition();
    }
    if (content === 'list3Content') {
      this.list3Content.nativeElement.scrollTo({ left: (this.list3Content.nativeElement.scrollLeft + -800), behavior: 'smooth' });
      this.checkList3ScrollPosition();
    }
  }

  scrollRight(content: any): void {
    // console.log('RIGHT');

    if (content === 'nowPlayingContent') {
      this.nowPlayingContent.nativeElement.scrollTo({ left: (this.nowPlayingContent.nativeElement.scrollLeft + 800), behavior: 'smooth' });
      this.checkNowPlayingScrollPosition();
    }
    if (content === 'mostPopularContent') {
      this.mostPopularContent.nativeElement.scrollTo({
        left: (this.mostPopularContent.nativeElement.scrollLeft + 800),
        behavior: 'smooth'
      });
      this.checkPopularScrollPosition();
    }
    if (content === 'list2Content') {
      this.list2Content.nativeElement.scrollTo({ left: (this.list2Content.nativeElement.scrollLeft + 800), behavior: 'smooth' });
      this.checkList2ScrollPosition();
    }
    if (content === 'list3Content') {
      this.list3Content.nativeElement.scrollTo({ left: (this.list3Content.nativeElement.scrollLeft + 800), behavior: 'smooth' });
      this.checkList3ScrollPosition();
    }

  }

  checkNowPlayingScrollPosition(): void {

    // console.log(this.nowPlayingContent.nativeElement.scrollLeft);

    this.nowPlayingMovies.previousPosition = this.nowPlayingMovies.currentPosition;
    this.nowPlayingMovies.currentPosition = this.nowPlayingContent.nativeElement.scrollLeft;
    // console.log('previousPosition', this.nowPlayingMovies.previousPosition);
    // console.log('currentPosition', this.nowPlayingMovies.currentPosition);

    if (this.nowPlayingMovies.previousPosition === this.nowPlayingMovies.currentPosition) {
      this.nowPlayingContent.nativeElement.scrollTo({
        left: (this.nowPlayingContent.nativeElement.scrollLeft -
          this.nowPlayingMovies.previousPosition), behavior: 'smooth'
      });
    }
    // console.log('nowPlayingMovies', this.nowPlayingMovies);

  }

  checkPopularScrollPosition(): void {

    this.popularMovies.previousPosition = this.popularMovies.currentPosition;
    this.popularMovies.currentPosition = this.mostPopularContent.nativeElement.scrollLeft;
    // console.log('previousPosition', this.popularMovies.previousPosition);
    // console.log('currentPosition', this.popularMovies.currentPosition);

    if (this.popularMovies.previousPosition === this.popularMovies.currentPosition) {
      this.mostPopularContent.nativeElement.scrollTo({
        left: (this.mostPopularContent.nativeElement.scrollLeft -
          this.popularMovies.previousPosition), behavior: 'smooth'
      });
    }
    // console.log('popularMovies', this.popularMovies);

  }

  checkList2ScrollPosition(): void {

    this.list2Movies.previousPosition = this.list2Movies.currentPosition;
    this.list2Movies.currentPosition = this.list2Content.nativeElement.scrollLeft;
    // console.log('previousPosition', this.list2Movies.previousPosition);
    // console.log('currentPosition', this.list2Movies.currentPosition);

    if (this.list2Movies.previousPosition === this.list2Movies.currentPosition) {
      this.list2Content.nativeElement.scrollTo({
        left: (this.list2Content.nativeElement.scrollLeft - this.list2Movies.previousPosition),
        behavior: 'smooth'
      });
    }
    // console.log('list2Movies', this.list2Movies);

  }

  checkList3ScrollPosition(): void {

    this.list3Movies.previousPosition = this.list3Movies.currentPosition;
    this.list3Movies.currentPosition = this.list3Content.nativeElement.scrollLeft;
    // console.log('previousPosition', this.list3Movies.previousPosition);
    // console.log('currentPosition', this.list3Movies.currentPosition);

    if (this.list3Movies.previousPosition === this.list3Movies.currentPosition) {
      this.list3Content.nativeElement.scrollTo({
        left: (this.list3Content.nativeElement.scrollLeft - this.list3Movies.previousPosition),
        behavior: 'smooth'
      });
    }
    // console.log('list3Movies', this.list3Movies);

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
