import { TestBed } from '@angular/core/testing';

import { StackdetailsService } from './stackdetails.service';

describe('StackdetailsService', () => {
  let service: StackdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
