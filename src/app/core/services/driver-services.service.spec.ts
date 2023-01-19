import { TestBed } from '@angular/core/testing';

import { DriverServicesService } from './driver-services.service';

describe('DriverServicesService', () => {
  let service: DriverServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
