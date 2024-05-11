import { Injectable } from '@angular/core';
import { RequestsService } from '../http/requests.service';
import { ChatGPTRequest } from '../../types/ChatGPTRequest';
import { ChatGPTResponse } from '../../types/ChatGPTResponse';
import {environment} from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {

  constructor(private reqService:RequestsService) {
  }
  DELIMITER = "____DELIMITER_____";
  private sendPrompt = async (prompt:string,answerFormat="answer=[ANSWER]"): Promise<ChatGPTResponse> => {
    return await this.reqService.post<ChatGPTResponse>("https://api.openai.com/v1/chat/completions",{
      model:"gpt-3.5-turbo",
      messages:[
        {
          role:"system",
          content:"You are a cybersecurity expert. You will give answers according to the AnswerFormat sent in the user prompt"
        },
        {
          role:"user",
          content:"AnswerFormat:" + answerFormat + "\n\nPrompt:\n\n" + prompt
        }
      ]
    },`Bearer ${environment.API_KEY}`);
  }
}
