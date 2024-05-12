import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatGPTService } from './services/chatgpt/chat-gpt.service';
import { InputComponent } from './components/input/input.component';

enum Routes {
  HOME = '',
  PASSWORD = 'password-checker',
  DETECT_PHISHING = 'phishing/detect',
  CREATE_PHISHING = 'phishing/create',
  CODE_ANALYZER = 'code-analyzer',
  REPORT_GENERATOR = 'report-generator',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    NavbarComponent,
    InputComponent,
  ],
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
