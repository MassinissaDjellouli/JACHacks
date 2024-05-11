import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

enum Routes {
  HOME = '',
  PASSWORD = 'password',
  PHISHING = 'phishing',
  CODE = 'code',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Jachacks';

  constructor(private router: Router) {}

  get route() {
    return this.router.url.substring(1); // remove leading '/'
  }

  get Routes() {
    return Routes;
  }
}
