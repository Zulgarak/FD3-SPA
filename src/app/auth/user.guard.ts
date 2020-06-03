import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { LoginUser } from './user';
import {CarsService} from '../cars/cars.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private carsService: CarsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    const id = route.paramMap.get('id');
    return this.authService.user
      .pipe(
        take(1),
        map((user: LoginUser) => {
          if (user.id === this.carsService.getCar(id)?.userId) {
            return true;
          }
          return this.router.createUrlTree(['/cars']);
        })
      );
  }
}
