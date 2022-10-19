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
  userName: string = '';
  userGenre: string = '';

  loginFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.userName, [Validators.required]),
    genreFormControl: new FormControl(this.userGenre, [Validators.required])
  });
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Nombre: "+this.loginFormGroup.get('nameFormControl')?.value+
    "\nGenero: "+ this.loginFormGroup.get('genreFormControl')?.value);
    // let persona ={} as People;
    // persona.name = this.loginFormGroup.get<string>('nameFormControl')?.value;
    // persona.gender= this.loginFormGroup.get<string>('genreFormControl')?.value;
  }
}
