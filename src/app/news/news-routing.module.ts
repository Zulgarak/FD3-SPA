import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {AuthGuard} from '../auth/auth.guard';



const routes: Routes = [
  { path: '', component: NewsListComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
