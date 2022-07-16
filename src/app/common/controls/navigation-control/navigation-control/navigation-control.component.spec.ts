import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationControlComponent } from './navigation-control.component';

describe('NavigationControlComponent', () => {
  let component: NavigationControlComponent;
  let fixture: ComponentFixture<NavigationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
