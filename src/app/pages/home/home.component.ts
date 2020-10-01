import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  details: any;
  constructor(public _data: NewsService) {}

  ngOnInit() {
    this._data.getNews().subscribe((e) => {
      this.details = e['articles'];
      console.log(this.details);
    });
  }
}
