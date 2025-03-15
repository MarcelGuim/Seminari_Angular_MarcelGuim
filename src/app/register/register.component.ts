import { CommonModule, Location } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
    standalone: true
})
export class RegisterComponent implements OnInit {
  loggedin: boolean = false;
  formularioRegister: FormGroup;
  userService = inject(UserService);
  @Output() registered = new EventEmitter<string>();
  @Output() exportRegistered = new EventEmitter<boolean>();
  @Output() exportGoBack = new EventEmitter<boolean>();

  
  constructor(private form: FormBuilder,  private router: Router){
    this.formularioRegister = this.form.group({
      name: [''],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]], 
    });
  }

  ngOnInit(): void {
    this.formularioRegister = this.form.group({
      name: ['Marcel'],
      age: ['21'],
      email: ['marcel.guim@estudiantat.upc.edu', [Validators.required, Validators.email]], 
      password: ['12345678', [Validators.required, Validators.minLength(8)]] 
    });
  }
  hasError(controlName:string, errorType:string){
    return this.formularioRegister.get(controlName)?.hasError(errorType) && this.formularioRegister.get(controlName)?.touched;  
  }

  register(){
    if (this.formularioRegister.invalid) {
      this.formularioRegister.markAllAsTouched();
      return;
    }

    const registerData = this.formularioRegister.value;

    this.userService.register(registerData).subscribe({
      next: (response) => {
        console.log('Register exitoso:', response);
        alert('Success')
        this.exportRegistered.emit(true);
      
      },
      error: (error) => {
        console.error('Error en el regsiter:', error);
        alert('Error en el regsiter, verifica los datos');
      }
    });
  }
  goBack() {
    this.exportGoBack.emit(false);
  }
}
