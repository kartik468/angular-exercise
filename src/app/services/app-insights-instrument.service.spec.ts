import { TestBed } from '@angular/core/testing';

import { AppInsightsInstrumentService } from './app-insights-instrument.service';

describe('AppInsightsInstrumentService', () => {
  let service: AppInsightsInstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInsightsInstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
