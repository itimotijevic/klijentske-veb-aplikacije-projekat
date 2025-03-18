import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { JsonPipe, NgIf } from '@angular/common';
import { AxiosError } from 'axios';

@Component({
  selector: 'app-home',
  imports: [JsonPipe,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: any[] | null = null
  error: string | null = null

  constructor () {
    MovieService.getMovies()
    .then(rsp => this.movies = rsp.data)
    .catch((e: AxiosError) => this.error = `${e.code} ${e.message}`)
  }
}
