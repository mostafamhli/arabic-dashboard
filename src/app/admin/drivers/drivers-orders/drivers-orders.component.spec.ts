import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversOrdersComponent } from './drivers-orders.component';

describe('DriversOrdersComponent', () => {
  let component: DriversOrdersComponent;
  let fixture: ComponentFixture<DriversOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
