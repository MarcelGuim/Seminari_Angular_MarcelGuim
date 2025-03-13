import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-inicio',
  imports: [ReactiveFormsModule, CommonModule, ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @Output() exportLogin = new EventEmitter<boolean>();
  @Output() exportRegister = new EventEmitter<boolean>();

  getRegistered() { 
    this.exportRegister.emit(false);
  }
  getLoggedIn() {
    this.exportLogin.emit(false);
  }
}
