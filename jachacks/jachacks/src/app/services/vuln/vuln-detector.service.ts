import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root',
})
export class VulnDetectorService {
  constructor(private chatGPTService: ChatGPTService) {}

  private readonly basePrompt: string =
    'Analyze the following code for security vulnerabilities. If no vulnerability was found, return NO_VULN. If any vulnerability is found, give me a list of all vulnerabilities with each element of the list and each element using the following format : ' +
    'Vulnerability:The vulnerability|Certainty:Certainty of the vulnerability being present from 0 to 100%|Fix: A fix|Example: Example of code using the fix.';
  //'If your answer is longer than one paragraph, add a TL;DR at the end of your response to summarize the response.\n';

  async detectVulnerabilities(code: string,depth = 0): Promise<string> {
    console.log('Detecting vulnerabilities in code: ', code);
    const response = await this.chatGPTService.sendPrompt(
      this.basePrompt + '\nCode : \n' + code
    );
    if(response.includes("NO_VULN")){
      return "The AI is unable to detect any vulnerabilities in the code.";
    }
    if(!response.includes("|") || !response.includes("Vulnerability:" || !response.includes("Certainty:") || !response.includes("Fix:") || !response.includes("Example:"))){
      if(depth>10){
        return "The AI is unable to detect any vulnerabilities in the code.";
      }
      return this.detectVulnerabilities(code,depth+1);
    }
    return response.replaceAll("|", '\n\n');
  }
}
