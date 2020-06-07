import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import {FeedbacksComponent} from './feedbacks.component';
import {FeedbacksResolver} from './feedbacks.resolver';



const routes: Routes = [
  {path: '',
    component: FeedbacksComponent,
    canActivate: [AuthGuard],
    resolve: [FeedbacksResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbacksRoutingModule { }
