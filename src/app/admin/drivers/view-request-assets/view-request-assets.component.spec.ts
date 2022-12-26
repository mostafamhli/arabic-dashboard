import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestAssetsComponent } from './view-request-assets.component';

describe('ViewRequestAssetsComponent', () => {
  let component: ViewRequestAssetsComponent;
  let fixture: ComponentFixture<ViewRequestAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequestAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRequestAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
