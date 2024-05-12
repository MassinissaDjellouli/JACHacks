import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PasswordAnalyseState, PasswordAnalysis} from "../../types/passwordAnalyse";
import {NgClass} from "@angular/common";
import {PasswordCheckerService} from "../../services/password/password-checker.service";
import {InputComponent} from "../../components/input/input.component";

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    InputComponent
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.scss'
})
export class PasswordCheckerComponent implements OnInit {
  showPassword: boolean = false;
  password: string = '';
  analyseState: PasswordAnalyseState = PasswordAnalyseState.NotAnalyzed;

  private readonly availableWidth: Array<string> = [
    "translate-x-0%",
    "translate-x-10%",
    "translate-x-20%",
    "translate-x-30%",
    "translate-x-40%",
    "translate-x-50%",
    "translate-x-60%",
    "translate-x-70%",
    "translate-x-80%",
    "translate-x-90%"
  ];
  public transform: string = '';
  @ViewChild('gradiant') gradiant: ElementRef<HTMLDivElement> | undefined;

  public analysis: PasswordAnalysis|undefined;

  constructor(private passwordCheckerService: PasswordCheckerService) { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  async changePassword() {
    if (this.password) {
      this.analyseState = PasswordAnalyseState.Analyzing;
      this.analysis = await this.passwordCheckerService.checkPassword(this.password);
      this.transform = this.availableWidth[isNaN(this.analysis.gptDegreeOfDanger) ? 9 : this.analysis.gptDegreeOfDanger];

      this.analyseState = PasswordAnalyseState.Analyzed;
    }
  }

  protected readonly PasswordAnalyseState = PasswordAnalyseState;
}
