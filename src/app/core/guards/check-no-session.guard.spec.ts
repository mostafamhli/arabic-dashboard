import { TestBed } from '@angular/core/testing';

import { CheckNoSessionGuard } from './check-no-session.guard';

describe('CheckNoSessionGuard', () => {
  let guard: CheckNoSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckNoSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
