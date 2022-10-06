import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicios_DI';
}

export interface Profesor{
  id: number;
  name: string;
  subject: string;
}