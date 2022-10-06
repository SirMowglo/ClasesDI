import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People, PeopleResponse } from '../interfaces/people.interface';

const API_BASE_URL= 'https://swapi.dev/api/';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public PeopleList(): Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${API_BASE_URL}/people`);
  }
  

  public getPeople(id: string){
    return this.http.get(`${API_BASE_URL}/people/${id}`);
  }
}
