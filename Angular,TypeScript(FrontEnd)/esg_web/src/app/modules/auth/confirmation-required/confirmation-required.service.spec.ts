import { TestBed } from '@angular/core/testing';

import { ConfirmationRequiredService } from './confirmation-required.service';

describe('ConfirmationRequiredService', () => {
  let service: ConfirmationRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
