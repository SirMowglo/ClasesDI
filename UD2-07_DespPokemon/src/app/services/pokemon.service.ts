import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDetailResponse } from '../interfaces/pokemon-detail-response.interface';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemonList(limit: number): Observable <PokemonResponse>{
    return this.http.get<PokemonResponse>(`${environment.baseUrl}/pokemon?limit=${limit}`);
  }

  public getPokemon(id: string): Observable<PokemonDetailResponse>{
    return this.http.get<PokemonDetailResponse>(`${environment.baseUrl}/pokemon/${id}`);
  }
}
