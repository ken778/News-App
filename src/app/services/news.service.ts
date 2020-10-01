import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(public _http: HttpClient) {}

  //function to get news ApI
  getNews() {
    return this._http.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=f0f5cb4c27cd4856a7d4d5c4c1f925d7'
    );
  }
  //function to get news by key
  getNewsDetails(keyword) {
    return this._http.get(
      'https://newsapi.org/v2/top-headlines?q=' +
        keyword +
        '&country=us&apiKey=f0f5cb4c27cd4856a7d4d5c4c1f925d7'
    );
  }
  //function to get single news details
  //getNewsDetails(ref){
  // return this._http.get('')
  //}
}
