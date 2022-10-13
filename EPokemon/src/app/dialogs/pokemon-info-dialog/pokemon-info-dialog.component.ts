import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/pokemon-dialog.interface';

@Component({
  selector: 'app-pokemon-info-dialog',
  templateUrl: './pokemon-info-dialog.component.html',
  styleUrls: ['./pokemon-info-dialog.component.css']
})
export class PokemonInfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData) { }
  isOneType: Boolean= true;

  ngOnInit(): void {
    console.log(this.data.pokemonInfo.types.length)
    if(this.data.pokemonInfo.types.length<2){
      this.isOneType = false;
    }else{
      this.isOneType=true;
    }
  }

}
