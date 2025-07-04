/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImagereportService } from './imagereport.service';

describe('Service: Imagereport', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagereportService]
    });
  });

  it('should ...', inject([ImagereportService], (service: ImagereportService) => {
    expect(service).toBeTruthy();
  }));
});
