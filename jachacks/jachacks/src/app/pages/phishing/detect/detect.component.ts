import {Component, ElementRef, ViewChild} from '@angular/core';
import {PhishingDetectorService} from '../../../services/phishing/phishing-detector.service';
import {PhishingDetectorResult} from '../../../types/PhishingDetectorResult';
import {InputComponent} from '../../../components/input/input.component';
import {FormsModule} from '@angular/forms';
import {PhishingAnalyseMode, PhishingAnalyseState} from "../../../types/PhishingAnalyse";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-phishing-detect',
  standalone: true,
  imports: [InputComponent,FormsModule,NgClass],
  templateUrl: './detect.component.html',
  styleUrl: './detect.component.scss'
})
export class PhishingDetectComponent {
  constructor(private phishingDetectorService:PhishingDetectorService) { }
  mode: PhishingAnalyseMode = PhishingAnalyseMode.Manual;

  from: string = '';
  to: string = '';
  subject: string = '';
  body: string = '';
  @ViewChild('annoying') fileInput: ElementRef<HTMLInputElement> | undefined;
  file: Blob | null = null;
  res: PhishingDetectorResult | undefined;
  fileError: string = '';


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

  phishingAnalyseState: PhishingAnalyseState = PhishingAnalyseState.NotAnalyzed;

  public switchMode(){
    if (this.mode === PhishingAnalyseMode.Manual) {
      this.mode = PhishingAnalyseMode.File;
    } else {
      this.mode = PhishingAnalyseMode.Manual;
    }
    this.res = undefined;
    this.phishingAnalyseState = PhishingAnalyseState.NotAnalyzed;
  }

  public detectPhishing = () => {
    this.phishingAnalyseState = PhishingAnalyseState.Analyzing;
    this.fileError = '';
    switch (this.mode){
      case PhishingAnalyseMode.Manual:
        if (this.from === '' || this.to === '' || this.subject === '' || this.body === '') {
          alert('Please fill in all fields!');
          this.phishingAnalyseState = PhishingAnalyseState.NotAnalyzed;
          return;
        }
        this.detect().then(() => {
          this.phishingAnalyseState = PhishingAnalyseState.Analyzed;
        });
        break;
      case PhishingAnalyseMode.File:
        if (this.file === null) {
          alert('Please upload a file!');
          this.phishingAnalyseState = PhishingAnalyseState.NotAnalyzed;
          return;
        }
        this.detectFromFile().then(() => {
          this.phishingAnalyseState = PhishingAnalyseState.Analyzed;
        });
        break;
    }
  }

  private async detect(): Promise<void> {
    this.res = await this.phishingDetectorService.detectPhishing(this.from, this.to, this.subject, this.body);
    this.transform = this.availableWidth[isNaN(this.res.score) ? 9 : (this.res.score * 2) - 1];
  }

  public getResReasoning = () => {
    if (this.res){
      return this.res.reasonning.map((el)=>el.split("-")).flat().map((el)=>el.split("\n")).flat().map((el)=>el.trim()).flat();
    }
    else {
      return [];
    }
  }
  private detectFromFile = async (): Promise<void> => {
    return new Promise<void>((resolve) => {
      let reader = new FileReader();
      reader.onload = async () => {
        let res = await this.phishingDetectorService.detectPhishingFromSMTP(reader.result as string);
        if (typeof res === "string") {
          this.fileError = res;
          this.res = undefined;
        } else {
          this.res = res;
          this.transform = this.availableWidth[isNaN(this.res.score) ? 9 : (this.res.score * 2) - 1];
          this.fileError = '';
        }
        resolve();
      }
      reader.readAsText(this.fileInput!.nativeElement.files![0]);
    });
  }
  protected readonly PhishingAnalyseState = PhishingAnalyseState;
  protected readonly PhishingAnalyseMode = PhishingAnalyseMode;
}
