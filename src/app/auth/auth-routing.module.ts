import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth.guard';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from '../shared/components/error-page/error-page.component';



const routes: Routes = [
  // {path: 'user', component: LoginComponent, children: [
  //     {}
  //   ]
  // },
  {path: 'login', component: LoginComponent,  canActivate: [NoAuthGuard]},
  {path: 'registration', component: RegistrationComponent,  canActivate: [NoAuthGuard]},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
