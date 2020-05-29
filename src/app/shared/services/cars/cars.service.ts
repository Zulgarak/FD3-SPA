import { Injectable } from '@angular/core';
import {Car} from '../../models/cars.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [];

  // private carsSubject = new BehaviorSubject<Car[]>([...this.cars]);

  constructor(private router: Router,
              private http: HttpClient) { }


  getCars(): Observable<Car[]> {
    return this.http.get(`https://fe3-angular.firebaseio.com/cars.json`)
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
    return this.http.post(`https://fe3-angular.firebaseio.com/cars.json`, car)
      .pipe(
        tap((data: {name: string}) => {
          this.cars.push({id: data.name, ...car});
        })
      );
  }


}
