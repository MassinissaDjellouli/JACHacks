import { TestBed } from '@angular/core/testing';

import { VulnDetectorService } from './vuln-detector.service';

describe('VulnDetectorService', () => {
  let service: VulnDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VulnDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
