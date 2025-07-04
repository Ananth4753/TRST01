import { TestBed } from '@angular/core/testing';

import { PackingslipService } from './packingslip.service';

describe('PackingslipService', () => {
  let service: PackingslipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackingslipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
