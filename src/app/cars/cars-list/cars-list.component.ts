import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../../shared/services/cars/cars.service';
import {Car} from '../../shared/models/cars.model';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit, OnDestroy {

  cars: Car[];
  subscription: Subscription;



  constructor( private carsService: CarsService) { }

  ngOnInit(): void {
    this.subscription = this.carsService.getCars()
      .subscribe((cars:Car[])=>{
        this.cars = cars;
        console.log(this.cars);
      });

  }
  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

}
