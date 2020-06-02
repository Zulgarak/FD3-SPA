import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';
import {Car} from '../../shared/models/cars.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars: Car[];
  subscription: Subscription;



  constructor( private carsService: CarsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      this.cars = data.cars;
    });
  }
  // ngOnDestroy():void {
    // this.subscription.unsubscribe();
  // }

}
