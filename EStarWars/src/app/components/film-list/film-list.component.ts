import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/interfaces/films.interface';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList: Film[]= [];
  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(response => {
      this.filmList = response.results;
    });
  }

}
