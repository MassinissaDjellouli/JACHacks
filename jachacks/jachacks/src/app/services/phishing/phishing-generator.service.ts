import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';
import { __addDisposableResource } from 'tslib';
import { ɵDomAdapter } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PhishingGeneratorService {

  constructor(private chatGPTService:ChatGPTService) { 
    
  }

  async sendGPTRequest(specificRequest: string) : Promise <string> {
    let response:string = await this.chatGPTService.sendPrompt(this.getRequestTemplate(specificRequest));
    return response;
  }
  
  private getRequestTemplate(changeableValue: string) {
    let templateRequest: string = `
    ChatGPT Crafter Request
    `;
    return templateRequest;
  }
}