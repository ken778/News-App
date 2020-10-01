import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  key: any;
  keyw: any;
  details: any;
  constructor(public Data: NewsService, public _route: ActivatedRoute) {}
  searching(form: NgForm) {
    this.key = form.value.search;
    this.Data.getNewsDetails(this.key).subscribe((e) => {
      this.details = e['articles'];
      console.log(this.details);
    });
  }

  ngOnInit() {
    // this.key = this._route.snapshot.paramMap.get('key');
  }
}
