import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpEvent, HttpHandler, JsonpClientBackend } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class HeaderInterceptor implements HttpInterceptor{
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler):any {
        // const API_KEY = '123456';
        
        let token = localStorage.getItem("token") ? JSON.stringify(localStorage.getItem("token")) : "";
        const headers = new HttpHeaders({
          'Authorization': token,
          'Content-Type': 'application/json'
        });
        const newRequest = httpRequest.clone({ headers : headers});
        console.log("---------", newRequest);
        return next.handle(newRequest);
      }
}
