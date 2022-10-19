import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {

  id:number = 0;
  char: People | undefined;
  charName: string = '';
  charGenre: string = '';
  charHeight: string = '';

  editPeopleFormGroup = new FormGroup({
    nameFormControl: new FormControl(this.charName, [Validators.required]),
    genreFormControl: new FormControl(this.charGenre, [Validators.required]),
    heightFormControl: new FormControl(this.charHeight,[Validators.required,Validators.min(50) ,Validators.max(300)])
  });
  constructor(private route: ActivatedRoute,private PeopleService: PeopleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.PeopleService.getPeople(this.id).subscribe(resp =>{
      this.char=resp;
      this.charName= resp.name;
      this.charGenre=resp.gender;
      this.charHeight = resp.height;
    })
    
  }

  
  onSubmit() {
    alert("Nombre: "+this.editPeopleFormGroup.get('nameFormControl')?.value+
    "\nGenero: "+ this.editPeopleFormGroup.get('genreFormControl')?.value+
    "\nAltura: "+ this.editPeopleFormGroup.get('heightFormControl')?.value);
  }
}
