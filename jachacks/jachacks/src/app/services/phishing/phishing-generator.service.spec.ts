import { TestBed } from '@angular/core/testing';

import { PhishingGeneratorService } from './phishing-generator.service';

describe('PhishingGeneratorService', () => {
  let service: PhishingGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhishingGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
