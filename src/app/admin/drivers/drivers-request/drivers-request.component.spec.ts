import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversRequestComponent } from './drivers-request.component';

describe('DriversOrdersComponent', () => {
  let component: DriversRequestComponent;
  let fixture: ComponentFixture<DriversRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
