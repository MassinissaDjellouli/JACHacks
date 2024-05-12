import { Component } from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { VulnDetectorService } from '../../services/vuln/vuln-detector.service';
import { MarkdownComponent } from 'ngx-markdown';
import { CodeAnalyseState } from '../../types/CodeAnalyse';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-code-analyzer',
  standalone: true,
  imports: [InputComponent, MarkdownComponent, ButtonComponent],
  templateUrl: './code-analyzer.component.html',
  styleUrl: './code-analyzer.component.scss',
})
export class CodeAnalyzerComponent {
  private text: string = '';
  codeAnalyseState: CodeAnalyseState = CodeAnalyseState.NotAnalysed;
  analysis: string = '';

  constructor(private vulnDetectorService: VulnDetectorService) {}

  onTextChanged(text: string) {
    this.text = text;
  }

  analyzeCode() {
    this.codeAnalyseState = CodeAnalyseState.Analyzing;
    this.dataBinding().then(() => {
      this.codeAnalyseState = CodeAnalyseState.Analyzed;
    });
  }

  private async dataBinding() {
    this.analysis = await this.vulnDetectorService.detectVulnerabilities(
      this.text
    );
  }

  protected readonly CodeAnalyseState = CodeAnalyseState;
}
