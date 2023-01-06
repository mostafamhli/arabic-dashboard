import { TestBed } from '@angular/core/testing';

import { CommunicationChannelServicesService } from './communication-channel-services.service';

describe('CommunicationChannelServicesService', () => {
  let service: CommunicationChannelServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationChannelServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
