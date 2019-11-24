import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@Angular/common/http';
import { request } from 'http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username='niguskidane';
    let password='dummy';
    let basicAuthHeaderString='Basic '+window.btoa(username+ ':' + password);

    request=request.clone(
      {
        setHeaders:{
          Authorization: basicAuthHeaderString
        }
      }
    );
    return next.handle(request);
  }

}
