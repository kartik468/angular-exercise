import { Injectable, ErrorHandler } from '@angular/core';
import { AppInsightsInstrumentService } from './app-insights-instrument.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(private appInsightsInstrumentService: AppInsightsInstrumentService) {
    super();
  }

  handleError(error: Error) {
    console.error(error);
    this.appInsightsInstrumentService.logException(error); // Manually log exception
  }
}
