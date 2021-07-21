import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  // newMovie = new Movie(0, '', '', '', [], '', new Date());
  @Output() addMovie = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  // submitMovie() {
  //   this.addMovie.emit(this.newMovie);
  // }
}
