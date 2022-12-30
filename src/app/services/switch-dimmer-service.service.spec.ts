import { TestBed } from '@angular/core/testing';

import { SwitchDimmerServiceService } from './switch-dimmer-service.service';

describe('SwitchDimmerServiceService', () => {
  let service: SwitchDimmerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchDimmerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
