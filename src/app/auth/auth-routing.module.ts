import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth.guard';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';



const routes: Routes = [
  // {path: 'user', component: LoginComponent, children: [
  //     {}
  //   ]
  // },
  {path: 'login', component: LoginComponent,  canActivate: [NoAuthGuard]},
  {path: 'registration', component: RegistrationComponent,  canActivate: [NoAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
