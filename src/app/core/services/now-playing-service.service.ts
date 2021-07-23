import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NowPlayingWrapper } from '../models/now-playing-wrapper.model';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingServiceService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  getNowPlayingList(): Observable<NowPlayingWrapper> {
    return this.apiService.get('3/movie/now_playing')
      .pipe(tap(_ => console.log('now playing ' + _)), map(data => {
        return data;
      }));
  }
}
