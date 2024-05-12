import { Component } from '@angular/core';
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

  file: Blob | null = null;
  fileRes: PhishingDetectorResult | undefined;
  fileError: string = '';

  public getMode(): number {
    return this.mode;
  }

  public switchMode(){
    this.mode *= -1;
  }

  public detectPhishing = async () => {
    let res;
    switch(this.mode){
      case 1:
        if(this.from === '' || this.to === '' || this.subject === '' || this.body === ''){
          alert('Please fill in all fields!')
          return;
        };
        res = await this.phishingDetectorService.detectPhishing(this.from, this.to, this.subject, this.body);
        console.log(res);
        
        break;
      case -1:

        if(this.file === null){
          alert('Please upload a file!')
          return;
        };
        this.detectFromFile(this.file);
        break;
    }
  }

  private detectFromFile = (file: Blob):string => {
    let reader = new FileReader();
    reader.onload = async () => {
      let res = await this.phishingDetectorService.detectPhishingFromSMTP(reader.result as string);
      if(typeof res === "string"){
        this.fileError = res;
      }
      else{
        this.fileRes = res;
      }
    }
    reader.readAsText(file);
    return "";
  }
}