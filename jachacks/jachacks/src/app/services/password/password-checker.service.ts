import { Injectable } from '@angular/core';
import { PasswordAnalysis } from "../../types/passwordAnalyse";
import { ChatGPTService } from '../chatgpt/chat-gpt.service';
import { RequestsService } from "../http/requests.service";

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor(private chatGPTService:ChatGPTService, private requestService: RequestsService) { }

  public async checkPassword(password:string): Promise<PasswordAnalysis> {
    const scorePrompt = `Given this password ("${password}"), please provide a score and a recommendation for its strength. The score should be a number between 1 and 10 where 1 is bad and 10 is good (5 would be a password with 8 characters, one special character or number or uppercase, 10 would have 10 or more characters, at least one number and one special character). The criteria for the score should be based on the password's length, complexity, and randomness. Do not show the password. Send the answer in the following format:score=SCORE`;
    const recommandationPrompt = `Given this password ("${password}"), please provide a recommendation to improve its strength. If the password is already strong, you can say that it is already strong.`;
    const [scoreResponse, recommandationResponse, hasRockYouMatch] = await Promise.all([
      this.chatGPTService.sendPrompt(scorePrompt),
      this.chatGPTService.sendPrompt(recommandationPrompt),
      this.getRockYouMatch(password)
    ]);
    console.log(scoreResponse);
    
    return {
      gptDegreeOfDanger: 10 - Math.min(10, Math.max(1, parseInt(scoreResponse) - (hasRockYouMatch ? 2 : (password.length > 12 ? -2 : 0)))),
      gptRecommandation: recommandationResponse.replace(password, '########').replace("ANSWER:", ""),
      hasRockYouMatch: hasRockYouMatch
    };
  }

  private async getRockYouMatch(password: string): Promise<boolean> {
    const data = await this.requestService.get<string[]>('/assets/rockyou.json');
    return data.includes(password);
  }
}
