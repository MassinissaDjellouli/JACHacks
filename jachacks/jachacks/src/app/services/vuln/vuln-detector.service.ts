import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root',
})
export class VulnDetectorService {
  constructor(private chatGPTService: ChatGPTService) {}

  private readonly basePrompt: string =
    'Analyze the following code for security vulnerabilities. Give me a list of all vulnerabilities with each element of the list and each element using the following format : ' +
    'A description of the vulnerability, a fix and an example of code using the fix.';
  //'If your answer is longer than one paragraph, add a TL;DR at the end of your response to summarize the response.\n';

  async detectVulnerabilities(code: string): Promise<string> {
    console.log('Detecting vulnerabilities in code: ', code);
    const response = await this.chatGPTService.sendPrompt(
      this.basePrompt + '\nCode : \n' + code
    );
    console.log('RESPONSE ::: \n' + response);
    return response;
  }
}
