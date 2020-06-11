import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { CarsService } from '../cars/cars.service';

@Injectable({
  providedIn: 'root'
})
export class CarsGuard implements CanActivate {
  constructor(private router: Router,
              private carsService: CarsService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const id = route.paramMap.get('id');
    if (id === this.carsService.getCar(id)?.id) {
      return true;
    }
    return this.router.createUrlTree(['/cars']);
  }
}
