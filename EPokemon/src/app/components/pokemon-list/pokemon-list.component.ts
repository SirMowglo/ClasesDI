import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {Pokemon} from 'src/app/interfaces/pokemon-response.interface';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[]=[];

  constructor(private pokemonService: PokemonService
    ) { }

  ngOnInit(): void {
    this.pokemonService.pokemonList().subscribe(response =>{
      this.listadoPokemon = response.results;
    });
  }

}
