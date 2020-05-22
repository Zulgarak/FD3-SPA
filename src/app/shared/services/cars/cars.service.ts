import { Injectable } from '@angular/core';
import {Car} from '../../models/cars.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [{id: '1', brand: 'Volvo', year: 2020, price: 13000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    {id: '2', brand: 'Volvo', year: 2020, price: 10000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    {id: '3', brand: 'Lada', year: 2019, price: 8000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    {id: '4', brand: 'Audi', year: 1995, price: 2000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    {id: '5', brand: 'BMV', year: 2001, price: 13000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'},
    {id: '6', brand: 'Mersedes', year: 2000, price: 8000, img: 'https://img1.autospot.ru/resize/400x-/ford/ford_tourneo_custom_(mikroavtobus)/737911/'}];

  private carsSubject = new BehaviorSubject<Car[]>([...this.cars]);

  constructor() { }

  getCars() {
    return this.carsSubject;
  }

  addCars(car: Car) {
    this.cars.push(car);
    this.carsSubject.next([...this.cars]);
  }


}
