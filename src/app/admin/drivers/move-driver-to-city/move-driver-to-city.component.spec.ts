import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDriverToCityComponent } from './move-driver-to-city.component';

describe('MoveDriverToCityComponent', () => {
  let component: MoveDriverToCityComponent;
  let fixture: ComponentFixture<MoveDriverToCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveDriverToCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveDriverToCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
