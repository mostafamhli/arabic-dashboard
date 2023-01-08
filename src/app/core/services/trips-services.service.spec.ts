import { TestBed } from '@angular/core/testing';

import { TripsServicesService } from './trips-services.service';

describe('TripsServicesService', () => {
  let service: TripsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
