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
  private hashCode = (s:string):number => {
    let hash = s.split("").reduce(function(a, b) {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return hash;
  }
   
  public sendPrompt = async (prompt:string, seed=true,temperature=0.2): Promise<string> => {
    const delimiter="=";
    const answerFormat = "answer" + delimiter + "ANSWER"
    
    const res = await this.reqService.post<ChatGPTResponse>("https://api.openai.com/v1/chat/completions",seed?{
      model:"gpt-3.5-turbo",
      temperature:temperature,
      seed:this.hashCode(prompt),
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
    }:{
      model:"gpt-3.5-turbo",
      temperature:temperature,
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
  public sendPromptSemiRaw = async (prompt:string, delimiter:string="=",answerFormat:string="answer"+delimiter+"ANSWER"): Promise<string[]> => {
    const res = await this.reqService.post<ChatGPTResponse>("https://api.openai.com/v1/chat/completions",{
      model:"gpt-3.5-turbo",
      temperature:0.2,
      seed:this.hashCode(prompt),
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
    
    return msg.split(delimiter);
}


  public sendPromptRaw = async (prompt:string, delimiter:string="=",answerFormat:string="answer"+delimiter+"ANSWER"): Promise<ChatGPTResponse> => {
    return await this.reqService.post<ChatGPTResponse>("https://api.openai.com/v1/chat/completions",{
      model:"gpt-3.5-turbo",
      temperature:0.1,
      seed:this.hashCode(prompt),
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
