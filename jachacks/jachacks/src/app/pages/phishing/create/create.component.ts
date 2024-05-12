import { Component } from '@angular/core';
import { PhishingGeneratorService } from '../../../services/phishing/phishing-generator.service';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule } from '@angular/forms';
//import { cdkScrollable } from '@angular/cdk/collections';

@Component({
  selector: 'app-phishing-create',
  standalone: true,
  imports: [InputComponent,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class PhishingCreateComponent {
  constructor(private PhishingGeneratorService:PhishingGeneratorService) { }
  sender: string = 'Security Team';
  recepient: string = 'Employee';
  strategy: string = 'Suspicious activity';
  private response: string[] = []

  click = async () => {
    this.response = (await this.PhishingGeneratorService.sendGPTRequest(this.sender, this.recepient, this.strategy)).split("\n");
  }
  public getResponse(): string[] {
    return this.response;
  }
}
/* @Component({
  selector: 'app-virtual-scroll',
  template: `
    <div cdkScrollable [items]="items | async">
      <div *cdkVirtualFor="let item of items | async">
        {{ item.name }}
      </div>
    </div>
  `,
})
export class VirtualScrollComponent {
  items = [];

  constructor() {
    for (let i = 0; i < 10000; i++) {
      //this.items.push({ name: `Item ${i}` });
    }
  }
} */