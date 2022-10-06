import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor(private PeopleService: PeopleService ) { }
  listadoPersonajes: People[] =[];

  ngOnInit(): void {
    this.PeopleService.PeopleList().subscribe(response =>{
      this.listadoPersonajes = response.results;
    })
  }

}
