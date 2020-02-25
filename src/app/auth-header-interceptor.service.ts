import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('headers interceptor ..');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'auth-token1')
    });

    // Clone the request and set the new header in one step.
    // const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    return next.handle(authReq);
  }
}
