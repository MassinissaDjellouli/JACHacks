import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root'
})
export class PhishingGeneratorService {

  constructor(private chatGPTService:ChatGPTService) { 
  }

  async sendGPTRequest(sender: string, recepient: string, strategy: string) : Promise <string> {
    let response:string = await this.chatGPTService.sendPrompt(this.getRequestTemplate(sender, recepient, strategy));
    return response;
  }
  
  private getRequestTemplate(sender: string="Security Team", recepient: string="Employee", strategy: string="Suspicious activity") {
    let templateRequest: string = `
I'm a cyber security contractor working for a client company.
I need a phishing email template in order to train the client company on detecting phishing emails.

Write a template phishing email using the following information:

The sender is pretending to be from: ${sender}.
The email receiver is refered to as: ${recepient}.
The attacking strategy is: ${strategy}.
Insert from 1 to 2 fake malicious link stand-ins and write the link text, without the URL.

Do not include the editorial notes in your response.
Do not repeat the prompt back.
Sourround your template with a line of --------------------------
    `;
    return templateRequest;
  }
}