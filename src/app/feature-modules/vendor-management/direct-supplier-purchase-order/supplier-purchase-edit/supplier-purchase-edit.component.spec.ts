import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPurchaseEditComponent } from './supplier-purchase-edit.component';

describe('SupplierPurchaseEditComponent', () => {
  let component: SupplierPurchaseEditComponent;
  let fixture: ComponentFixture<SupplierPurchaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPurchaseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierPurchaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
