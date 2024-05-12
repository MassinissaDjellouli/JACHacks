import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { PhishingDetectorService } from '../../../services/phishing/phishing-detector.service';
import { PhishingDetectorResult } from '../../../types/PhishingDetectorResult';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phishing-detect',
  standalone: true,
  imports: [InputComponent,FormsModule],
  templateUrl: './detect.component.html',
  styleUrl: './detect.component.scss'
})
export class PhishingDetectComponent {
  constructor(private phishingDetectorService:PhishingDetectorService) { }
  private mode = 1;

  from: string = '';
  to: string = '';
  subject: string = '';
  body: string = '';
  @ViewChild('annoying') fileInput: ElementRef<HTMLInputElement> | undefined;
  file: Blob | null = null;
  res: PhishingDetectorResult | undefined;
  fileError: string = '';

  public getMode(): number {
    return this.mode;
  }

  public switchMode(){
    this.mode *= -1;
  }

  public detectPhishing = async () => {
    switch(this.mode){
      case 1:
        if(this.from === '' || this.to === '' || this.subject === '' || this.body === ''){
          alert('Please fill in all fields!')
          return;
        };
        this.res = await this.phishingDetectorService.detectPhishing(this.from, this.to, this.subject, this.body);
        break;
      case -1:

        if(this.file === null){
          alert('Please upload a file!')
          return;
        };
        this.detectFromFile();
        break;
    }
  }
  public getResReasoning = () => {
    if(this.res){
      return this.res.reasonning.map((el)=>el.split("-")).flat().map((el)=>el.split("\n")).flat().map((el)=>el.trim()).flat();

    }
    else{
      return [];
    }
  }
  private detectFromFile = ():string => {
    let reader = new FileReader();
    reader.onload = async () => {
      let res = await this.phishingDetectorService.detectPhishingFromSMTP(reader.result as string);
      console.log(res);
      
      if(typeof res === "string"){
        this.fileError = res;
        this.res = undefined;
      }
      else{
        this.res = res;
        this.fileError = '';
      }
    }
    reader.readAsText(this.fileInput!.nativeElement.files![0]);
    return "";
  }
}