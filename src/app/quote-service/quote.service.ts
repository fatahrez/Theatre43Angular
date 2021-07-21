import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { th } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quote: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote("",0, "", "");
   }

  getQuote() {
    interface ApiResponse {
      id: number;
      author: string;
      quote: string;
      permalink: string;
    }

    this.http.get<ApiResponse>(environment.api_url).subscribe(data=>{
      this.quote.author =data.author
      this.quote.quote = data.quote
      }
    );
  }
}
