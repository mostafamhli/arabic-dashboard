import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCartComponent } from './mat-cart.component';

describe('MatCartComponent', () => {
  let component: MatCartComponent;
  let fixture: ComponentFixture<MatCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
