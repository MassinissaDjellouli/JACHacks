import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportGenerateState } from '../../types/ReportGenerate';
import { PhishingGeneratorService } from '../../services/phishing/phishing-generator.service';
import { InputComponent } from '../../components/input/input.component';
import { ReportGeneratorService } from '../../services/reportGenerator/report.service';
import { MarkdownComponent } from 'ngx-markdown';
import { ButtonComponent } from '../../components/button/button.component';
@Component({
  selector: 'app-report-generator',
  standalone: true,
  imports: [InputComponent, FormsModule, MarkdownComponent, ButtonComponent],
  templateUrl: './report-generator.component.html',
  styleUrl: './report-generator.component.scss',
})
export class ReportGeneratorComponent {
  constructor(private reportGeneratorService: ReportGeneratorService) {}
  reportType: string = 'incident';
  content: string =
    'We got hacked 4 times, and we lost 2 clients because of it.';
  twist: string = 'positive';
  private response: string = '';
  reportGenerateState: ReportGenerateState = ReportGenerateState.NotGenerated;

  click = () => {
    this.reportGenerateState = ReportGenerateState.Generating;
    console.log(this.reportGenerateState);

    this.request().then(() => {
      this.reportGenerateState = ReportGenerateState.Generated;
    });
  };

  private async request(): Promise<void> {
    this.response = await this.reportGeneratorService.sendGPTRequest(
      this.reportType,
      this.content,
      this.twist
    );
    if (this.response.startsWith('```'))
      this.response = this.response.substring(3, this.response.length - 3);
    if (this.response.endsWith('```'))
      this.response = this.response.substring(0, this.response.length - 3);
  }

  public getResponse(): string {
    return this.response;
  }

  protected readonly ReportGenerateState = ReportGenerateState;
}
