import { Component } from '@angular/core';
import { ChatGPTService } from '../../services/chatgpt/chat-gpt.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-randomtip',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './randomtip.component.html',
  styleUrl: './randomtip.component.scss',
})
export class RandomtipComponent {
  constructor(private chatGPTService: ChatGPTService) {}

  private randomTip: string = '';

  async ngOnInit() {
    this.generateRandomTip();
  }

  public getRandomTip(): string {
    return this.randomTip;
  }
  private activeBtn = true;
  isActiveBtn = () => this.activeBtn;
  public generateRandomTip = async () => {
    this.activeBtn = false;
    this.randomTip = (
      await this.chatGPTService.sendPrompt(
        'Give me an advanced cybersecurity tip under 40 words for a ' +
          (Math.random() > 0.5 ? 'Red' : 'Blue') +
          ' team cybersecurity expert about ' +
          this.getRandomCategory(),
        false,
        1
      )
    ).replace('ANSWER: ', '');
    this.activeBtn = true;
  };

  private getRandomCategory = (): string => {
    const categories = [
      'Phishing',
      'Password Security',
      'Network Security',
      'Data Protection',
      'Social Engineering',
      'Malware',
      'Firewalls',
      'Encryption',
      'Binary Exploits',
      'Linux',
      'Windows Security',
      'Mobile Security',
      'Forensics',
      'Reverse Engineering',
      'Phisyxal Security',
      'Ransomware',
      'Zero-Day Attacks',
      'DDoS Attacks',
      'SQL Injection',
      'Cross-Site Scripting',
    ];
    return categories[Math.floor(Math.random() * categories.length)];
  };
}
