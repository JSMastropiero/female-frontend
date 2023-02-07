import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient, HttpHeaders } from '@angular/common/http';
import { timer, throwError, Observable, } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    urlBase: string = environment.urlBase;
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('access-token') != null){
        const token =  localStorage.getItem('token');
        // if the token is  stored in localstorage add it to http header
   //clone http to the custom AuthRequest and send it to the server 
const AuthRequest = request.clone( { });
return next.handle(AuthRequest)
   }else {
     return next.handle(request);
   }
  }
}