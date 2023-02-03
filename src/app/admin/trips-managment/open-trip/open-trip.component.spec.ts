import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTripComponent } from './open-trip.component';

describe('OpenTripComponent', () => {
  let component: OpenTripComponent;
  let fixture: ComponentFixture<OpenTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
