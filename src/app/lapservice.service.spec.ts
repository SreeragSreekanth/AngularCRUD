import { TestBed } from '@angular/core/testing';

import { LapserviceService } from './lapservice.service';

describe('LapserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LapserviceService = TestBed.get(LapserviceService);
    expect(service).toBeTruthy();
  });
});
