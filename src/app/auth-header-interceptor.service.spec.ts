import { TestBed } from '@angular/core/testing';

import { AuthHeaderInterceptorService } from './auth-header-interceptor.service';

describe('AuthHeaderInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHeaderInterceptorService = TestBed.inject(AuthHeaderInterceptorService);
    expect(service).toBeTruthy();
  });
});
