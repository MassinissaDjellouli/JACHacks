import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root'
})
export class PhishingGeneratorService {

  constructor(private chatGPTService:ChatGPTService) { }
}
