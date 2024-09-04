import { Component, Input } from '@angular/core';
import { Movie } from '../types/movies';
import { MovieCardComponent } from "../movie-card/movie-card.component";

@Component({
  selector: 'movie-category',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.css'
})
export class MovieCategoryComponent {
@Input() title:String = "";
@Input() movieList:Movie[]=[];

}
