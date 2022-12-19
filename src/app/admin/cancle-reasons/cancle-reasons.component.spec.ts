import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleReasonsComponent } from './cancle-reasons.component';

describe('CancleReasonsComponent', () => {
  let component: CancleReasonsComponent;
  let fixture: ComponentFixture<CancleReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancleReasonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancleReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
