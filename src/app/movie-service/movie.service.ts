import { Injectable } from '@angular/core';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movies = [
    new Movie(1, 'Fast & Furious 9','Cipher enlists the help of Jakob, Doms younger brother to take revenge on Dom and his team', 'Justin Lin', ['Vin Diesel', 'Michelle Rodriguez'], 'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',new Date(2021, 7, 15)),
    new Movie(2, 'Fast & Furious 9','Cipher enlists the help of Jakob, Doms younger brother to take revenge on Dom and his team', 'Justin Lin', ['Vin Diesel', 'Michelle Rodriguez'], 'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',new Date(2021, 7, 15)),
    new Movie(3, 'Fast & Furious 9','Cipher enlists the help of Jakob, Doms younger brother to take revenge on Dom and his team', 'Justin Lin', ['Vin Diesel', 'Michelle Rodriguez'], 'https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',new Date(2021, 7, 15))
  ]

  getMovies() {
    return this.movies;
  }
}
