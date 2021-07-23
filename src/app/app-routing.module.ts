import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from "./movie/movie.component";

const routes: Routes = [
  // {
  //   path: 'movies',
  //   component: MovieComponent
  // },
  // {
  //   path: '**', component: MovieComponent
  // },
  // {
  //   path: ' ', component: MovieComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
