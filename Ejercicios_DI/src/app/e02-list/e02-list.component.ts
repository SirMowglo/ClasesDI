import { Component, OnInit } from '@angular/core';
import {Profesor} from '../app.component';
@Component({
  selector: 'app-e02-list',
  templateUrl: './e02-list.component.html',
  styleUrls: ['./e02-list.component.css']
})


export class E02ListComponent implements OnInit {
  
  
  profesores= PROFESORES;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  
}
export const PROFESORES: Profesor[]=[
  { id: 1, name: 'Miguel', subject:'Diseño' },
  { id: 2, name: 'Luismi', subject:'Acceso a Datos' },
  { id: 3, name: 'Jesus', subject:'Empresa' }
]
