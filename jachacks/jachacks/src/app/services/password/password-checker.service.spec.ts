import { TestBed } from '@angular/core/testing';

import { PasswordCheckerService } from './password-checker.service';

describe('PasswordCheckerService', () => {
  let service: PasswordCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
