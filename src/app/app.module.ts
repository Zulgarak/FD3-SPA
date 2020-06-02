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
// import { DefaultComponent } from './layouts/default/default.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CarsComponent } from './cars/cars.component';
import { AddFormCarComponent } from './cars/add-form-car/add-form-car.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ErrorsComponent} from './shared/errors/errors.component';
import {ErrorInterceptor} from './shared/errors/error.interceptor';
import {LoaderComponent} from './shared/loader/loader.component';
import {LoaderInterceptor} from './shared/loader/loader.interceptor';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthInterceptor} from './auth/auth.interceptor';




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
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorPageComponent,
    CarsComponent,
    AddFormCarComponent,
    ErrorsComponent,
    LoaderComponent,
    // DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
