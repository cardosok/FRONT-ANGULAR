import { TestBed } from '@angular/core/testing';

import { HortaServiceService } from './horta-service.service';

describe('HortaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HortaServiceService = TestBed.get(HortaServiceService);
    expect(service).toBeTruthy();
  });
});
