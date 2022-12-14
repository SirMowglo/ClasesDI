import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film, FilmResponse } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  public getFilmList(): Observable<FilmResponse>{
    return this.http.get<FilmResponse>(`${environment.baseUrl}/films`);
  }
  public getFilm(id:string): Observable<Film>{
    return this.http.get<Film>(`${environment.baseUrl}/films/${id}`);
  }
}
