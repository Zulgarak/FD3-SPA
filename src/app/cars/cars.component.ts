import { Component, OnInit } from '@angular/core';
import {Car} from '../shared/models/cars.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
