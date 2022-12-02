import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { AuthenticationService } from './authentication.service';



@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private _auhtentService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userToken = this._auhtentService.getTokenStorage('access_token');

    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer  ${userToken}') });


    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    return next.handle(request);
  }
}
