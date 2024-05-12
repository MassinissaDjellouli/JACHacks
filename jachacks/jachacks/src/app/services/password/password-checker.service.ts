import {Injectable} from '@angular/core';
import {ChatGPTService} from '../chatgpt/chat-gpt.service';
import {PasswordAnalysis} from "../../types/passwordAnalyse";
import {RequestsService} from "../http/requests.service";

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor(private chatGPTService:ChatGPTService, private requestService: RequestsService) { }

  public async checkPassword(password:string): Promise<PasswordAnalysis> {
    const scorePrompt = `Given this password ("${password}"), please provide a score and a recommendation for its strength. The score should be a number between 1 and 10 where 1 is bad and 10 is good.`;
    const recommandationPrompt = `Given this password ("${password}"), please provide a recommendation to improve its strength.`;
    const [scoreResponse, recommandationResponse, hasRockYouMatch] = await Promise.all([
      this.chatGPTService.sendPrompt(scorePrompt),
      this.chatGPTService.sendPrompt(recommandationPrompt),
      this.getRockYouMatch(password)
    ]);

    return {
      gptDegreeOfDanger: 10 - Math.min(10, Math.max(1, parseInt(scoreResponse))),
      gptRecommandation: recommandationResponse,
      hasRockYouMatch: hasRockYouMatch
    };
  }

  private async getRockYouMatch(password: string): Promise<boolean> {
    const data = await this.requestService.get<string[]>('/assets/rockyou.json');
    return data.includes(password);
  }
}
