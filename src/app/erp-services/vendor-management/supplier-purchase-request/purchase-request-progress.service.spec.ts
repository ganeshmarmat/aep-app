import { TestBed } from '@angular/core/testing';

import { PurchaseRequestProgressService } from './purchase-request-progress.service';

describe('PurchaseRequestProgressService', () => {
  let service: PurchaseRequestProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseRequestProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
