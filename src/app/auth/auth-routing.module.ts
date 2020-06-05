import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth.guard';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from '../shared/components/error-page/error-page.component';
import {CarsComponent} from '../cars/cars.component';
import {AuthGuard} from './auth.guard';
import {CarsResolver} from '../cars/cars.resolver';



const routes: Routes = [
  // {path: 'user', component: LoginComponent, children: [
  //     {}
  //   ]
  // },
  {path: 'login', component: LoginComponent,  canActivate: [NoAuthGuard]},
  {path: 'registration', component: RegistrationComponent,  canActivate: [NoAuthGuard]},
  {path: 'user/bookmarks',
    component: CarsComponent,
    canActivate: [AuthGuard],
    resolve: { cars: CarsResolver }},
  {path: 'user/my-cars',
    component: CarsComponent,
    canActivate: [AuthGuard],
    resolve: { cars: CarsResolver }},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
