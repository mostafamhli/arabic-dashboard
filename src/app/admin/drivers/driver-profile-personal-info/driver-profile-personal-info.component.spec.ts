import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverProfilePersonalInfoComponent } from './driver-profile-personal-info.component';

describe('DriverProfilePersonalInfoComponent', () => {
  let component: DriverProfilePersonalInfoComponent;
  let fixture: ComponentFixture<DriverProfilePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverProfilePersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverProfilePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
