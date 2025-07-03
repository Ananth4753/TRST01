/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SkuService } from './sku.service';

describe('Service: Sku', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkuService]
    });
  });

  it('should ...', inject([SkuService], (service: SkuService) => {
    expect(service).toBeTruthy();
  }));
});
