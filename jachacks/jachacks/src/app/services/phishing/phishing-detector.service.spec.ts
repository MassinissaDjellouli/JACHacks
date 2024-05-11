import { TestBed } from '@angular/core/testing';

import { PhishingDetectorService } from './phishing-detector.service';

describe('PhishingDetectorService', () => {
  let service: PhishingDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhishingDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
