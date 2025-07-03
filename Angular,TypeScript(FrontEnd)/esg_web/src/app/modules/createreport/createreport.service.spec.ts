/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatereportService } from './createreport.service';

describe('Service: Createreport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatereportService]
    });
  });

  it('should ...', inject([CreatereportService], (service: CreatereportService) => {
    expect(service).toBeTruthy();
  }));
});
