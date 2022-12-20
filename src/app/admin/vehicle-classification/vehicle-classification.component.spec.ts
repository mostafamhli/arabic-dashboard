import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleClassificationComponent } from './vehicle-classification.component';

describe('VehicleClassificationComponent', () => {
  let component: VehicleClassificationComponent;
  let fixture: ComponentFixture<VehicleClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
