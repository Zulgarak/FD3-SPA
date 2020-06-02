import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(m =>
      m.CarsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m =>
      m.NewsModule)
  },
  // WTF!!!!!!!!!????что делать то
  // позже, переделать логику роутов
  // {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
