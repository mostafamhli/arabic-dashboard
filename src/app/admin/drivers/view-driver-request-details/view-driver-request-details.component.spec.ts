import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverRequestDetailsComponent } from './view-driver-request-details.component';

describe('ViewDriverRequestDetailsComponent', () => {
  let component: ViewDriverRequestDetailsComponent;
  let fixture: ComponentFixture<ViewDriverRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDriverRequestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDriverRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
