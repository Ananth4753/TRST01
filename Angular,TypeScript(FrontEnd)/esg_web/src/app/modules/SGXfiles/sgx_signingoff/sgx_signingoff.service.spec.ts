/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Sgx_signingoffService } from './sgx_signingoff.service';

describe('Service: Sgx_signingoff', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sgx_signingoffService]
    });
  });

  it('should ...', inject([Sgx_signingoffService], (service: Sgx_signingoffService) => {
    expect(service).toBeTruthy();
  }));
});
