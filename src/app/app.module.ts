import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { HighlightDirective } from './highlight.directive';
import { TimePipePipe } from './time-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material';
import { CoreModule } from './core/core.module';
import { ChangeHomeDirective } from './change-home.directive';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    MovieFormComponent,
    HighlightDirective,
    TimePipePipe,
    ChangeHomeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    Material,
    HttpClientModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
