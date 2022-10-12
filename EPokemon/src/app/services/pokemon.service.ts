import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfoResponse } from '../interfaces/pokemon-info-response.interface';
import { Pokemon, PokemonResponse } from '../interfaces/pokemon-response.interface';

const API_BASE_URL = 'https://pokeapi.co/api/v2';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public pokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${API_BASE_URL}/pokemon`);
  }
  public getPokemonInfo(pokemon: Pokemon): Observable<PokemonInfoResponse> {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    let id = pokemon.url.substring(baseUrl.length, pokemon.url.length - 1);
    return this.http.get<PokemonInfoResponse>(`${API_BASE_URL}/pokemon/${id}`);
  }

}
