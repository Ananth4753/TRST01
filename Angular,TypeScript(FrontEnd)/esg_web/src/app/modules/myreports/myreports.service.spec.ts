/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyreportsService } from './myreports.service';

describe('Service: Myreports', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyreportsService]
    });
  });

  it('should ...', inject([MyreportsService], (service: MyreportsService) => {
    expect(service).toBeTruthy();
  }));
});
