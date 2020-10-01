import { NewsService } from './services/news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
