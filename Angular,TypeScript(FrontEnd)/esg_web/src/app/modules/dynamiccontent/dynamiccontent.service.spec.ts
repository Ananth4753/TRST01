/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamiccontentService } from './dynamiccontent.service';

describe('Service: Dynamiccontent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamiccontentService]
    });
  });

  it('should ...', inject([DynamiccontentService], (service: DynamiccontentService) => {
    expect(service).toBeTruthy();
  }));
});
