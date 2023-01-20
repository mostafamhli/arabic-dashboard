import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaytaxiTransfersComponent } from './jaytaxi-transfers.component';

describe('JaytaxiTransfersComponent', () => {
  let component: JaytaxiTransfersComponent;
  let fixture: ComponentFixture<JaytaxiTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaytaxiTransfersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaytaxiTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
