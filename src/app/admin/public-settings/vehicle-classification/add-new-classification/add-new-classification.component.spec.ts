import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewClassificationComponent } from './add-new-classification.component';

describe('AddNewClassificationComponent', () => {
  let component: AddNewClassificationComponent;
  let fixture: ComponentFixture<AddNewClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
