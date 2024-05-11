import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root'
})
export class PhishingDetectorService {

  constructor(private chatGPTService:ChatGPTService) { }
}
