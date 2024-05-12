import { Component } from '@angular/core';
import { PhishingGeneratorService } from '../../../services/phishing/phishing-generator.service';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule } from '@angular/forms';
import { PhishingAnalyseState } from '../../../types/PhishingAnalyse';
import { ButtonComponent } from '../../../components/button/button.component';
//import { cdkScrollable } from '@angular/cdk/collections';

@Component({
  selector: 'app-phishing-create',
  standalone: true,
  imports: [InputComponent, FormsModule, ButtonComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class PhishingCreateComponent {
  constructor(private PhishingGeneratorService: PhishingGeneratorService) {}
  sender: string = 'Security Team';
  recepient: string = 'Employee';
  strategy: string = 'Suspicious activity';
  private response: string[] = [];
  phishingAnalyseState: PhishingAnalyseState = PhishingAnalyseState.NotAnalyzed;

  click = () => {
    this.phishingAnalyseState = PhishingAnalyseState.Analyzing;
    this.request().then(() => {
      this.phishingAnalyseState = PhishingAnalyseState.Analyzed;
    });
  };

  private async request() : Promise<void> {
    let res = (await this.PhishingGeneratorService.sendGPTRequest(this.sender, this.recepient, this.strategy))
    if(res.startsWith("```"))
      res = res.substring(3, res.length - 3);
    if(res.endsWith("```"))
      res = res.substring(0, res.length - 3);
    this.response = res.split("\n");
  }

  public getResponse(): string[] {
    return this.response;
  }

  protected readonly PhishingAnalyseState = PhishingAnalyseState;
}
