import { TestBed } from '@angular/core/testing';

import { BrsrSignoffreportService } from './brsr-signoffreport.service';

describe('BrsrSignoffreportService', () => {
  let service: BrsrSignoffreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrsrSignoffreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
