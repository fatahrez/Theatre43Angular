import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import {Observable} from 'rxjs';
import {MovieWrapper} from '../models';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class List2Service {

  constructor(
    private apiService: ApiServiceService
  ) { }

  getList2List(): Observable<MovieWrapper> {
    return this.apiService.get('4/list/2')
      .pipe(tap(_ => console.log('list 2' + _)), map(data => {
        return data;
      }));
  }
}
