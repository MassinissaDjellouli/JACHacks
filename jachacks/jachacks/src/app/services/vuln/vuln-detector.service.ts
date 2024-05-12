import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root',
})
export class VulnDetectorService {
  constructor(private chatGPTService: ChatGPTService) {}

  private readonly basePrompt: string =
    'Analyze the following code for security vulnerabilities. Give me a list of all vulnerabilities with each element of the list separated with %%% and each element using the following format : ' +
    '"VULNERABILITY: [insert vulnerability here with a short precise explanation] FIX: [insert the way to fix the vulnerability here] EXAMPLE: [provide a short and simple code example for the fix with no special formatting]. ';
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
