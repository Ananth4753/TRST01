/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalvariableService } from './globalvariable.service';

describe('Service: Globalvariable', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalvariableService]
    });
  });

  it('should ...', inject([GlobalvariableService], (service: GlobalvariableService) => {
    expect(service).toBeTruthy();
  }));
});
