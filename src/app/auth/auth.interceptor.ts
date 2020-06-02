import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {exhaustMap, take} from 'rxjs/operators';
import {LoginUser} from './user';
//
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user: LoginUser) => {
        let cloneReq = null;
        if (!!user && user.token) {
          cloneReq = req.clone({
            params: req.params.set('auth', user.token),
          });
        }
        return next.handle(cloneReq || req);
      }),
    );
  }
}
