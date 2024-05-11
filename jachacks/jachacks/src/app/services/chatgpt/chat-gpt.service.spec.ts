import { TestBed } from '@angular/core/testing';

import { ChatGPTService } from './chat-gpt.service';

describe('ChatGPTService', () => {
  let service: ChatGPTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGPTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
