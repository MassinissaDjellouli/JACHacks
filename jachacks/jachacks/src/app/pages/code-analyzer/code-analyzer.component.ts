import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { VulnDetectorService } from '../../services/vuln/vuln-detector.service';

@Component({
  selector: 'app-code-analyzer',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './code-analyzer.component.html',
  styleUrl: './code-analyzer.component.scss',
})
export class CodeAnalyzerComponent {
  private text: string = '';
  analysis: string[] = []; // analysis split by paragraph

  constructor(private vulnDetectorService: VulnDetectorService) {}

  onTextChanged(text: string) {
    this.text = text;
  }

  async analyzeCode() {
    console.log('Analyzing code: ', this.text);
    let response = await this.vulnDetectorService.detectVulnerabilities(
      this.text
    );

    this.analysis = response.split('\n').map((line) => {
      if (line.startsWith('```')) {
        return '';
      }
      if (line.toLowerCase().includes('answer') && line.length < 10) {
        return '';
      }
      return line.replaceAll('%%%', '\n');
    });
  }
}
