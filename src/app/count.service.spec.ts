import { TestBed } from '@angular/core/testing';

import { CountService } from './count.service';

describe('CountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountService = TestBed.inject(CountService);
    expect(service).toBeTruthy();
  });
});
