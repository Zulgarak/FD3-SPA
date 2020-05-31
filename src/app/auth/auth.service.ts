import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';
import {LoginUser} from './user';
import {tap} from 'rxjs/operators';
import {AuthResponse} from './auth-response';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user: Subject<LoginUser> = new Subject<LoginUser>();

  signUp(email: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({'loader': 'true'});
    return this.http.post(`${environment.signUpUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true}, {headers} )
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHandler(data);
        })
      );
  }

  login(email: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({'loader': 'true'});
    return this.http.post(`${environment.loginUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true}, {headers})
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHandler(data);
        })
      );
  }

  private _loginHandler(data: AuthResponse) {
    const expirationDate: Date = new Date(new Date().getTime() +
      Number(data.expiresIn) * 1000);

    const user: LoginUser = new LoginUser(
      data.email,
      data.localId,
      data.idToken,
      expirationDate
    );
    this.user.next(user);
    // this.router.navigate([environment.authRedirectUrl]);
  }



}
