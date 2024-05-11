import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import rockyou from '../../../assets/rockyou.json';

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

  changePassword() {
    console.log(this.password);
  }
}
