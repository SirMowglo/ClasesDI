import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People, PeopleResponse } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  public getPeopleList(page:number): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${environment.baseUrl}/people/?page=${page}`);
  }
  public getPeople(id:number): Observable<People>{
    return this.http.get<People>(`${environment.baseUrl}/people/${id}`);
  }
}
