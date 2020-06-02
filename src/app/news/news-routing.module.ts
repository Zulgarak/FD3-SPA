import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';
import {NoAuthGuard} from '../auth/no-auth.guard';



const routes: Routes = [
  { path: 'news', component: NewsListComponent, canActivate: [ NoAuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
