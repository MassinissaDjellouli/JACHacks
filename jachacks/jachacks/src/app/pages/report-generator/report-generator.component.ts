import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportGenerateState } from '../../types/ReportGenerate';
import { PhishingGeneratorService } from '../../services/phishing/phishing-generator.service';
import { InputComponent } from '../../components/input/input.component';
import { ReportGeneratorService } from '../../services/reportGenerator/report.service';

@Component({
  selector: 'app-report-generator',
  standalone: true,
  imports: [InputComponent, FormsModule],
  templateUrl: './report-generator.component.html',
  styleUrl: './report-generator.component.scss'
})
export class ReportGeneratorComponent {
  constructor(private reportGeneratorService:ReportGeneratorService) { }
  reportType: string = 'incident';
  content: string = 'We got hacked 4 times, and we lost 2 clients because of it.';
  twist: string = 'positive';
  private response: string[] = []
  reportGenerateState: ReportGenerateState = ReportGenerateState.NotGenerated;

  click = () => {
    this.reportGenerateState = ReportGenerateState.Generating;
    this.request().then(() => {
      this.reportGenerateState = ReportGenerateState.Generated;
    });
  }

  private async request() : Promise<void> {
    this.response = (await this.reportGeneratorService.sendGPTRequest(this.reportType, this.content, this.twist)).split("\n");
  }

  public getResponse(): string[] {
    return this.response;
  }

  protected readonly ReportGenerateState = ReportGenerateState;
}
