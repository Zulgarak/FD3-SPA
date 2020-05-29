import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form-car',
  templateUrl: './add-form-car.component.html',
  styleUrls: ['./add-form-car.component.scss']
})
export class AddFormCarComponent implements OnInit {

  cars = [
    {value: 'audi', viewValue: 'Audi'},
    {value: 'lada', viewValue: 'Lada'},
    {value: 'bmv', viewValue: 'BMV'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
