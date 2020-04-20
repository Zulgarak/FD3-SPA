import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterMainPageComponent } from './filter-main-page/filter-main-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { BrandsCarListComponent } from './cars/brands-car-list/brands-car-list.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarItemComponent } from './cars/cars-list/car-item/car-item.component';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';
import {SharedModule} from './shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    FilterMainPageComponent,
    NewsListComponent,
    NewsItemComponent,
    BrandsCarListComponent,
    CarsListComponent,
    CarItemComponent,
    CarsDetailComponent,
    AuthorizationComponent,
    // DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
