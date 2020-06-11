import { Injectable } from '@angular/core';
import { Car } from '../shared/models/cars.model';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { loader } from '../shared/components/loader/loader.decorator';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [];
  // private carsSubject = new BehaviorSubject<Car[]>([...this.cars]);

  constructor(private router: Router,
              private http: HttpClient) { }

  @loader()
  getCars(headers?: HttpHeaders, value?): Observable<Car[]> {
  // getCars(limit?: string, headers?: HttpHeaders): Observable<Car[]> {
  //   let params = new HttpParams();
    // const headers = new HttpHeaders({ 'loader': 'true' });
    // if (limit) {
      // params = params.set('orderBy', '"title"');
      // params = params.set('limitToFirst', limit);
      // params = params.set('loader', 'true');
    // }
    // console.log(params);

    return this.http.get(`${environment.api}/cars.json`, {headers})
    // return this.http.get(`${environment.api}/cars.json`, {headers, params})
      .pipe(
        map((data) => {
          const cars: Car[] = [];
          // console.log(data);
          // console.log('это с сервера');
          for (let key in data) {
            cars.push({id: key, ...data[key]});
          }
          this.cars = cars.reverse();
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
  @loader()
  updateCar(id: string, car, headers?: HttpHeaders) {
    return this.http.put(`${environment.api}/cars/${id}.json`, car, {headers});
  }

  deleteCar(id) {
    return this.http.delete(`${environment.api}/cars/${id}.json`)
      .pipe(
        map(
          (data) => {
            let index: number;
            this.cars.forEach((car, carIndex) => {
              if (car.id === id) {
                index = carIndex;
              }
            });
            this.cars.splice(index, 1);
          }),
      );
  }

}
