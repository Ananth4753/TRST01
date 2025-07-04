import { TestBed } from '@angular/core/testing';

import { BrsrSigningoffService } from './brsr-signingoff.service';

describe('BrsrSigningoffService', () => {
  let service: BrsrSigningoffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrsrSigningoffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
