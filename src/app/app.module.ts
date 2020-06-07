import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './shared/components/errors/error.interceptor';
import { LoaderInterceptor } from './shared/components/loader/loader.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';
// import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
// import { NewsModule } from './news/news.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthRoutingModule,
    // CarsModule,
    AuthModule,
    // NewsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: BUCKET, useValue: 'gs://fe3-angular.appspot.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
