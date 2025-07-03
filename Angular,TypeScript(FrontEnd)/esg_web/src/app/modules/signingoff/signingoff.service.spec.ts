/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigningoffService } from './signingoff.service';

describe('Service: Signingoff', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigningoffService]
    });
  });

  it('should ...', inject([SigningoffService], (service: SigningoffService) => {
    expect(service).toBeTruthy();
  }));
});
