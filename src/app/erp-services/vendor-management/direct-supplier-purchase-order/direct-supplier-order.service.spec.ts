import { TestBed } from '@angular/core/testing';

import { DirectSuppliePurchaseOrderService } from './direct-supplier-order.service';

describe('DirectSupplierOrderService', () => {
  let service: DirectSuppliePurchaseOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectSuppliePurchaseOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
