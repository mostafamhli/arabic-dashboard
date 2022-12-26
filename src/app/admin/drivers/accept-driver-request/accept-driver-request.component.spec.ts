import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDriverRequestComponent } from './accept-driver-request.component';

describe('AcceptDriverRequestComponent', () => {
  let component: AcceptDriverRequestComponent;
  let fixture: ComponentFixture<AcceptDriverRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptDriverRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptDriverRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
