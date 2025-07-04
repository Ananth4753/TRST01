/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Sgx_validateService } from './sgx_validate.service';

describe('Service: Sgx_validate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sgx_validateService]
    });
  });

  it('should ...', inject([Sgx_validateService], (service: Sgx_validateService) => {
    expect(service).toBeTruthy();
  }));
});
