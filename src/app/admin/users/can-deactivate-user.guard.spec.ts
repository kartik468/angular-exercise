import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateUserGuard } from './can-deactivate-user.guard';

describe('CanDeactivateUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateUserGuard]
    });
  });

  it('should ...', inject([CanDeactivateUserGuard], (guard: CanDeactivateUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
