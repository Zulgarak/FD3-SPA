import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarsService} from '../../shared/services/cars/cars.service';
import {Car} from '../../shared/models/cars.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.scss']
})
export class CarsDetailComponent implements OnInit {
  car: Car;
  carId: string;
  carSubscription: Subscription;

  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.carSubscription = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.carId = paramMap.get('id');
      this.car = this.carsService.getCar(this.carId);
    });
  }


}
