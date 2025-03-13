import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from "./usuario/usuario.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UsuarioComponent, LoginComponent, RegisterComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
  
})
export class AppComponent {
  title = 'angular-seminari6';
  loggedin: boolean = false;
  register: boolean = false;
  loggedin2: boolean = false;

  getLoggedIn2(loggedin2: boolean){
    this.loggedin2 = loggedin2;
  }
  getRegistered(registered: boolean){
    this.loggedin =registered;
    this.register=!registered;
  }
  getLoggedIn(loggedin: boolean){
    this.loggedin = !loggedin;
    this.register= loggedin;
  }
  getGoBack(goBack: boolean){
    this.loggedin=goBack;
    this.register=goBack;
  }
  setRegister() {
    this.register = true;
    this.loggedin = false;
  }

  setLogin() {
    this.loggedin = true;
    this.register = false;
  }
}
