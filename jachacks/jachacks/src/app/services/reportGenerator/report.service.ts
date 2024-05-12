import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root'
})
export class ReportGeneratorService {

  constructor(private chatGPTService:ChatGPTService) { 
  }

  async sendGPTRequest(reportType: string, content: string, twist: string) : Promise <string> {
    let response:string = await this.chatGPTService.sendPrompt(this.getRequestTemplate(reportType, content, twist));
    console.log(response)
    return response;
  }
  
  private getRequestTemplate(reportType: string="Incident", content: string="", twist: string="Negative") {
    let templateRequest: string = `
I'm a cyber security contractor working for a client company.
I need an example of an ${reportType} report for the higher-ups, for the last quarter.

Write a summary ${reportType} report in markdown using the following information:
${content}

Be as ${twist} as you can in the report while giving the information.

Sourround your template with a line of --------------------------
    `;
    return templateRequest;
  }
}