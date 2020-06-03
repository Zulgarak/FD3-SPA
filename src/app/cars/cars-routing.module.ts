import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { AuthGuard } from '../auth/auth.guard';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { AddFormCarComponent } from './add-form-car/add-form-car.component';
import { CarsResolver } from './cars.resolver';




const routes: Routes = [
  {path: '', component: CarsComponent, canActivate: [AuthGuard],
    resolve: { cars: CarsResolver }
  },
  {path: 'add', component: AddFormCarComponent, canActivate: [AuthGuard]},
  {path: ':id', component: CarsDetailComponent, canActivate: [AuthGuard],
    resolve: { cars: CarsResolver }},
  {path: ':id/edit', component: AddFormCarComponent, canActivate: [AuthGuard],
    resolve: { cars: CarsResolver }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
