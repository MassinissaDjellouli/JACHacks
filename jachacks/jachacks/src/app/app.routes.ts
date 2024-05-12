import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PhishingDetectComponent } from './pages/phishing/detect/detect.component';
import { PhishingCreateComponent } from './pages/phishing/create/create.component';
import { CodeAnalyzerComponent } from './pages/code-analyzer/code-analyzer.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'phishing/detect', component: PhishingDetectComponent },
  { path: 'phishing/create', component: PhishingCreateComponent },
  { path: 'code-analyzer', component: CodeAnalyzerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // if route doesn't exist
];
