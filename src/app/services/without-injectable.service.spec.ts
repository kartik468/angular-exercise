import { TestBed } from '@angular/core/testing';

import { WithoutInjectableService } from './without-injectable.service';

describe('WithoutInjectableService', () => {
  let service: WithoutInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
