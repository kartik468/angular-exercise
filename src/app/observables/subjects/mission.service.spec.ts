import { TestBed } from '@angular/core/testing';

import { MissionService } from './mission.service';

describe('MissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionService = TestBed.inject(MissionService);
    expect(service).toBeTruthy();
  });
});
