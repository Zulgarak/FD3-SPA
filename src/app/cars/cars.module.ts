import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CarsComponent} from './cars.component';
import {CarsListComponent} from './cars-list/cars-list.component';
import {CarItemComponent} from './cars-list/car-item/car-item.component';
import {CarsDetailComponent} from './cars-detail/cars-detail.component';
import {AddFormCarComponent} from './add-form-car/add-form-car.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // CarsRoutingModule,
    SharedModule
  ],
  declarations: [
    CarsComponent,
    CarsListComponent,
    CarItemComponent,
    CarsDetailComponent,
    AddFormCarComponent,
  ]
})
export class CarsModule {

}
