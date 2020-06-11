import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { LoginUser } from './user';
import { tap } from 'rxjs/operators';
import { AuthResponse } from './auth-response';
import { Router } from '@angular/router';
import { loader } from '../shared/components/loader/loader.decorator';
import { ErrorsService } from '../shared/components/errors/errors.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: BehaviorSubject<LoginUser> = new BehaviorSubject<LoginUser>(null);

  constructor(private http: HttpClient,
              private router: Router,
              private errorsService: ErrorsService) { }

  getUser() {
    return this.user;
  }

  @loader()
  signUp(email: string, password: string, headers?: HttpHeaders) {
    return this.http.post(`${environment.signUpUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true}, {headers})
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHandler(data, password);
        })
      );
  }

  @loader()
  login(email: string, password: string, headers?: HttpHeaders) {
    return this.http.post(`${environment.loginUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true}, {headers})
      .pipe(
        tap((data: AuthResponse) => {
          console.log(data);
          this._loginHandler(data, password);
        })
      );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  autoLogin() {
    let user: {
      email: string,
      id: string,
      _token: string,
      _expirationDate: string,
    };

    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
    } else {
      return false;
    }

    const loadedUser = new LoginUser(
      user.email,
      user.id,
      user._token,
      new Date(user._expirationDate),
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const duration = (new Date(user._expirationDate)).getTime() - (new Date().getTime());
      this.autoLogout(duration);
    }
  }

  autoLogout(duration: number) {
    setTimeout(() => {
      this.logout();
      this.errorsService.showError({title: 'Auto logout', message: 'Auto logout'});
    }, duration);
  }

  private _loginHandler(data: AuthResponse, password) {
    const expirationDate: Date = new Date(new Date().getTime() +
      Number(data.expiresIn) * 1000);

    const user: LoginUser = new LoginUser(
      data.email,
      data.localId,
      data.idToken,
      expirationDate
    );
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.autoLogout(Number(data.expiresIn) * 1000);
    this.router.navigate([environment.authRedirectUrl]);
  }

}
