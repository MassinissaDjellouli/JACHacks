import {Injectable} from '@angular/core';
import {ChatGPTService} from '../chatgpt/chat-gpt.service';
import {PasswordAnalysis} from "../../types/passwordAnalyse";
import rockYou from '../../../assets/rockyou.json';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor(private chatGPTService:ChatGPTService) { }

  public async checkPassword(password:string): Promise<PasswordAnalysis> {
    const scorePrompt = `Given this password ("${password}"), please provide a score and a recommendation for its strength. The score should be a number between 1 and 10 where 1 is bad and 10 is good.`;
    const recommandationPrompt = `Given this password ("${password}"), please provide a recommendation to improve its strength.`;
    const scoreResponse = await this.chatGPTService.sendPrompt(scorePrompt);
    const recommandationResponse = await this.chatGPTService.sendPrompt(recommandationPrompt);

    console.log(scoreResponse, recommandationResponse);

    return {
      gptDegreeOfDanger: 10 - Math.min(10, Math.max(1, parseInt(scoreResponse))),
      gptRecommandation: recommandationResponse,
      hasRockYouMatch: this.getRockYouMatch(password)
    };
  }

  private getRockYouMatch(password: string): boolean {
    return rockYou.includes(password);
  }
}
