import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverProfileVehicleInfoComponent } from './driver-profile-vehicle-info.component';

describe('DriverProfileVehicleInfoComponent', () => {
  let component: DriverProfileVehicleInfoComponent;
  let fixture: ComponentFixture<DriverProfileVehicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverProfileVehicleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverProfileVehicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
