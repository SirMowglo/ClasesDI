import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from 'src/app/interfaces/pokemon-detail-response.interface';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] =[];
  pokemonSelected: PokemonDetailResponse | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }
  getPokemonList(){
    this.pokemonService.getPokemonList(50).subscribe(resp =>{
      this.pokemonList = resp.results;
    })
  }
  getPokemon(id: string){
    this.pokemonService.getPokemon(id).subscribe(resp =>{
      this.pokemonSelected = resp;
    })
  }
}
