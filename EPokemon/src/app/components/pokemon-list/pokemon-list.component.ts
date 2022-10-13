import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon-response.interface';
import { PokemonInfoResponse } from 'src/app/interfaces/pokemon-info-response.interface';
import { PokemonInfoDialogComponent } from 'src/app/dialogs/pokemon-info-dialog/pokemon-info-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  listadoPokemon: Pokemon[] = [];
  pokemonSelected: PokemonInfoResponse | undefined;
  constructor(private pokemonService: PokemonService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPokemonList();
  }
  getPokemonList() {
    this.pokemonService.pokemonList().subscribe((response) => {
      this.listadoPokemon = response.results;
    });
  }

  getImg(pokemon: Pokemon) {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    let id = pokemon.url.substring(baseUrl.length, pokemon.url.length - 1);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getPokemonInfo(pokemon: Pokemon) {

    this.pokemonService.getPokemonInfo(pokemon).subscribe((response) => {
       this.pokemonSelected = response;
       this.dialog.open(PokemonInfoDialogComponent, {
        data: {
          pokemonInfo: this.pokemonSelected,
        },
      });
     });
  }
  
}
