import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {CarItemComponent} from './cars/cars-list/car-item/car-item.component';
import {CarsComponent} from './cars/cars.component';
import {AddFormCarComponent} from './cars/add-form-car/add-form-car.component';
import {CarsDetailComponent} from './cars/cars-detail/cars-detail.component';

// потом переделать роуты, после добавления car-detail, firebase


const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add', component: AddFormCarComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'cars/:id', component: CarsDetailComponent},
    // children: [
      // {path: 'list', component: CarsListComponent},
      // {path: ':id', component: CarItemComponent},
    // ]},
  // {path: 'cars', component: CarsListComponent),
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
