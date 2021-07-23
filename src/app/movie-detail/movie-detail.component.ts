import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: any;
  @Output() isPremierTimeOver = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {
  }

  movieDelete(doDelete: boolean) {
    this.isPremierTimeOver.emit(doDelete);
  }

}
