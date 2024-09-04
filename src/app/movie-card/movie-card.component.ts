import { Component, Input } from '@angular/core';
import { Movie } from '../types/movies';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie! :Movie;
  // tmdbConfig=tmdbConfig;
}
