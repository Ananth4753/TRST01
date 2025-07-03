/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectemplateService } from './sectemplate.service';

describe('Service: Sectemplate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectemplateService]
    });
  });

  it('should ...', inject([SectemplateService], (service: SectemplateService) => {
    expect(service).toBeTruthy();
  }));
});
