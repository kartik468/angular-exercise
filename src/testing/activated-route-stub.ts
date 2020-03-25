import { ReplaySubject } from 'rxjs';
import { ParamMap, Params, convertToParamMap } from '@angular/router';

export class ActivatedRouteStub {
  private paramsSubject = new ReplaySubject<ParamMap>();

  paramMap = this.paramsSubject.asObservable();

  constructor(params?: Params) {
    if (params) {
      this.setParamMap(params);
    }
  }

  setParamMap(params: Params) {
    this.paramsSubject.next(convertToParamMap(params));
  }
}
