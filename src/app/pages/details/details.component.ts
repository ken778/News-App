import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  //variables
  Ref: any;
  details: any;

  constructor(public Data: NewsService) {}

  ngOnInit(): void {}
}
