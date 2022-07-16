import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreReturnsComponent } from './store-returns.component';

describe('StoreReturnsComponent', () => {
  let component: StoreReturnsComponent;
  let fixture: ComponentFixture<StoreReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreReturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
