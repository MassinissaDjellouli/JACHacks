import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PasswordAnalyseState, PasswordAnalysis} from "../../types/passwordAnalyse";
import rockYou from '../../../assets/rockyou.json';
import translateMesure from "../../../assets/translateMesure.json";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.scss'
})
export class PasswordCheckerComponent implements OnInit {
  showPassword: boolean = false;
  password: string = '';
  analyseState: PasswordAnalyseState = PasswordAnalyseState.NotAnalyzed;

  private readonly availableWidth: Array<string> = translateMesure as Array<string>;
  public transform: string = '';
  @ViewChild('gradiant') gradiant: ElementRef<HTMLDivElement> | undefined;

  public analysis: PasswordAnalysis|undefined;

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async changePassword() {
    this.analyseState = PasswordAnalyseState.Analyzing;
    this.transform = this.availableWidth[this.availableWidth.length - 1];
    this.analysis = {
      gptDegreeOfDanger: 9,
      gptRecommandation: '',
      hasRockYouMatch: this.getRockYouMatch()
    };

    this.analyseState = PasswordAnalyseState.Analyzed;
  }

  getRockYouMatch(): boolean {
    return rockYou.includes(this.password);
  }

  protected readonly PasswordAnalyseState = PasswordAnalyseState;
}
