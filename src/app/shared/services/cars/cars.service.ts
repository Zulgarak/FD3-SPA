import { Injectable } from '@angular/core';
import {Car} from '../../models/cars.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {loader} from '../../loader/loader.decorator';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [];

  // private carsSubject = new BehaviorSubject<Car[]>([...this.cars]);

  constructor(private router: Router,
              private http: HttpClient) { }

  @loader()
  getCars(headers?: HttpHeaders): Observable<Car[]> {
     return this.http.get(`${environment.api}/cars.json`, {headers})
      .pipe(
        map((data) => {
          const cars: Car[] = [];
          for (let key in data) {
            cars.push({id: key, ...data[key]});
          }
          this.cars = cars;
          return this.cars;
        })
      );
  }

  getCar(id: string) {
    return this.cars.find((car: Car) => car.id === id);
  }

  addCar(car) {
    return this.http.post(`${environment.api}/cars.json`, car)
      .pipe(
        tap((data: {name: string}) => {
          this.cars.push({id: data.name, ...car});
        })
      );
  }


}
