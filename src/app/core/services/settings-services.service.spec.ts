import { TestBed } from '@angular/core/testing';

import { SettingsServicesService } from './settings-services.service';

describe('SettingsServicesService', () => {
  let service: SettingsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
