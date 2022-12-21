import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationDisplayComponent } from './classification-display.component';

describe('ClassificationDisplayComponent', () => {
  let component: ClassificationDisplayComponent;
  let fixture: ComponentFixture<ClassificationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
