import { Component } from '@angular/core';
import { PhishingGeneratorService } from '../../../services/phishing/phishing-generator.service';

@Component({
  selector: 'app-phishing-create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class PhishingCreateComponent {
  constructor(private phishingGenerateService:PhishingGeneratorService) { 
  }

  click = () => {
    this.phishingGenerateService.sendGPTRequest("");
  }

}
