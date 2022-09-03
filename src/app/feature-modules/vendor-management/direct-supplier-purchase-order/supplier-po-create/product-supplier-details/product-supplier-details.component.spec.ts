import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSupplierDetailsComponent } from './product-supplier-details.component';

describe('ProductSupplierDetailsComponent', () => {
  let component: ProductSupplierDetailsComponent;
  let fixture: ComponentFixture<ProductSupplierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSupplierDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSupplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
