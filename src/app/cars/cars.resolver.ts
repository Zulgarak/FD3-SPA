import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Car} from '../shared/models/cars.model';
import {CarsService} from './cars.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CarsResolver implements Resolve<Car[]> {
  constructor(private carsService: CarsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car[]> {
    // return this.carsService.getCars( '12');
    return this.carsService.getCars();
  }
}
