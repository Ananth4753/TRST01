/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublishedService } from './published.service';

describe('Service: Published', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublishedService]
    });
  });

  it('should ...', inject([PublishedService], (service: PublishedService) => {
    expect(service).toBeTruthy();
  }));
});
