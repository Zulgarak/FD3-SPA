import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsComponent} from './cars.component';
import {NoAuthGuard} from '../auth/no-auth.guard';



const routes: Routes = [
  { path: 'cars', component: CarsComponent, canActivate: [ NoAuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
