import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient) { }


  private formatErrors(error: any): Observable<any> {
    return throwError(error.json);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.moviedb_api_url}${path}` + '?api_key=' + `${environment.api_key}`, {params})
    .pipe(catchError(this.formatErrors));
  }

}
