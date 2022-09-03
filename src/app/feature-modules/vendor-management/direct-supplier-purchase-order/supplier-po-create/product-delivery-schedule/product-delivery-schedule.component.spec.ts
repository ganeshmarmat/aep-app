import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveryScheduleComponent } from './product-delivery-schedule.component';

describe('ProductDeliveryScheduleComponent', () => {
  let component: ProductDeliveryScheduleComponent;
  let fixture: ComponentFixture<ProductDeliveryScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliveryScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeliveryScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
