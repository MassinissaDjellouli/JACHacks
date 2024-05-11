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

  public sendPrompt = async (prompt:string): Promise<string> => {
    const delimiter="=";
    const answerFormat = "answer" + delimiter + "ANSWER"
    const res = await this.reqService.post<ChatGPTResponse>("https://api.openai.com/v1/chat/completions",{
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
    let msg = res.choices[0].message.content;
    let splited = msg.split(delimiter);
    if(splited.length > 1){
      return splited[1];
    }
    else{
      return msg;
    }
  }

  public sendPromptRaw = async (prompt:string, delimiter:string="=",answerFormat:string="answer"+delimiter+"ANSWER"): Promise<ChatGPTResponse> => {
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
