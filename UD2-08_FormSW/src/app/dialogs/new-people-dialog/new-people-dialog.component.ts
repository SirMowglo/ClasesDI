import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PeopleListComponent } from 'src/app/components/people-list/people-list.component';
import { People } from 'src/app/interfaces/people.interface';

@Component({
  selector: 'app-new-people-dialog',
  templateUrl: './new-people-dialog.component.html',
  styleUrls: ['./new-people-dialog.component.css']
})
export class NewPeopleDialogComponent implements OnInit {
  charName: string = '';
  charGenre: string = '';
  charHeight: string = '';

  newPeopleFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.charName, [Validators.required]),
    genreFormControl: new FormControl(this.charGenre, [Validators.required]),
    heightFormControl: new FormControl(this.charHeight,[Validators.required,Validators.min(50) ,Validators.max(300)])
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Nombre: "+this.newPeopleFormGroup.get('nameFormControl')?.value+
    "\nGenero: "+ this.newPeopleFormGroup.get('genreFormControl')?.value+
    "\nAltura: "+ this.newPeopleFormGroup.get('heightFormControl')?.value);
  }
}
