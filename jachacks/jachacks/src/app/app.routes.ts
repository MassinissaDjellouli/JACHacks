import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PasswordCheckerComponent } from './pages/password-checker/password-checker.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'password-checker', component: PasswordCheckerComponent }
];
