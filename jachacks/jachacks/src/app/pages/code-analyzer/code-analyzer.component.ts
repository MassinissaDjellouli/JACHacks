import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { VulnDetectorService } from '../../services/vuln/vuln-detector.service';
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-code-analyzer',
  standalone: true,
  imports: [InputComponent, MarkdownComponent],
  templateUrl: './code-analyzer.component.html',
  styleUrl: './code-analyzer.component.scss',
})
export class CodeAnalyzerComponent {
  private text: string = '';
  analysis: string = '';

  constructor(private vulnDetectorService: VulnDetectorService) {}

  onTextChanged(text: string) {
    this.text = text;
  }

  async analyzeCode() {
    console.log('Analyzing code: ', this.text);
    let response = await this.vulnDetectorService.detectVulnerabilities(
      this.text
    );

    this.analysis = response;
  }
}
