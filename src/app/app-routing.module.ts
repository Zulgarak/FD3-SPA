import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m =>
      m.CarsModule)
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./feedbacks/feedbacks.module').then(m =>
      m.FeedbacksModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m =>
      m.NewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
