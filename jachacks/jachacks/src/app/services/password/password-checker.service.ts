import { Injectable } from '@angular/core';
import { ChatGPTService } from '../chatgpt/chat-gpt.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor(private chatGPTService:ChatGPTService) { }
}
