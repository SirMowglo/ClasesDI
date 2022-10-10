import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-e01-binding',
  templateUrl: './e01-binding.component.html',
  styleUrls: ['./e01-binding.component.css'],
})
export class E01BindingComponent implements OnInit {
  hide = true;
  constructor() {}
  inputNombre: string = '';
  inputApellido: string = '';
  inputNIF: string = '';
  inputEmail: string = '';
  inputTelefono: string = '';
  inputSexo: string = '';
  inputConociste: string = '';

  ngOnInit(): void {}

  email = new FormControl('', [Validators.email]);

  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  register() {
    console.log(
      'Nombre: ' +
        this.inputNombre +
        '\nApellido: ' +
        this.inputApellido +
        '\nNIF: ' +
        this.inputNIF +
        '\nEmail: ' +
        this.inputEmail +
        '\nTelefono: ' +
        this.inputTelefono +
        '\nSexo: ' +
        this.inputSexo +
        '\nComo conociste: ' +
        this.inputConociste
    );
  }
}
