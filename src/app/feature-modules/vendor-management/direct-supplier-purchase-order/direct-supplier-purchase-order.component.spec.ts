import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectSupplierPurchaseOrderComponent } from './direct-supplier-purchase-order.component';

describe('DirectSupplierPurchaseOrderComponent', () => {
  let component: DirectSupplierPurchaseOrderComponent;
  let fixture: ComponentFixture<DirectSupplierPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectSupplierPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectSupplierPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
