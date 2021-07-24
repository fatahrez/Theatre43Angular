import { Injectable } from '@angular/core';
import {ApiServiceService} from './api-service.service';
import {Observable} from 'rxjs';
import {YoutubeWrapperModel} from '../models/youtube-wrapper.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  getYoutubeSearchList(search: number): Observable<YoutubeWrapperModel> {
    return this.apiService.get('3/movie/' + search + '/videos')
      .pipe(tap(_ => console.log('youtube data' + _)), map(data => {
        return data;
      }));
  }
}
