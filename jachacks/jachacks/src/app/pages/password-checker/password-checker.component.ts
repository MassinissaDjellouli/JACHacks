import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.scss'
})
export class PasswordCheckerComponent {
  showPassword: boolean = false;
  password: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  setPassword(password: string) {
    this.password = password;
  }
}
