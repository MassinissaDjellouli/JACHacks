import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PhishingDetectComponent } from './pages/phishing/detect/detect.component';
import { PhishingCreateComponent } from './pages/phishing/create/create.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'phishing/detect', component: PhishingDetectComponent },
  { path: 'phishing/create', component: PhishingCreateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // if route doesn't exist
];
