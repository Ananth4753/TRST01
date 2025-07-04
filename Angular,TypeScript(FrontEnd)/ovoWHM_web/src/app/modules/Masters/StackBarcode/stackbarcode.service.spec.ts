import { TestBed } from '@angular/core/testing';

import { StackbarcodeService } from './stackbarcode.service';

describe('StackbarcodeService', () => {
  let service: StackbarcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StackbarcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
