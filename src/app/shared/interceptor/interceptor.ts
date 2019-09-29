import {Injectable} from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MyInterceptor implements HttpInterceptor{
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${localStorage.getItem('ACCESS_TOKEN')}`
      }
    });
    return next.handle(req) ;
  }

}
