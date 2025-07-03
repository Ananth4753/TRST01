/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectdisService } from './selectdis.service';

describe('Service: Selectdis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectdisService]
    });
  });

  it('should ...', inject([SelectdisService], (service: SelectdisService) => {
    expect(service).toBeTruthy();
  }));
});
