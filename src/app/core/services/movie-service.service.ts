import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MovieWrapper } from '../models';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  getMovieList(): Observable<MovieWrapper> {
    return this.apiService.get('list/2')
    .pipe(tap(_ => console.log('fetched')), map(data=> {
      return data;
    }));
  }
}
