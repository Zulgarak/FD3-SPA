import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreakpointObserverDirective } from './directives/breakpoint-observer.directive';
import { MaterialModule } from './modules/material.module';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {RouterModule} from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreakpointObserverDirective,
    ErrorsComponent,
    LoaderComponent,
    ErrorPageComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreakpointObserverDirective,
    MaterialModule,
    ErrorsComponent,
    LoaderComponent,
    ErrorPageComponent,
    FilterPipe,
  ],
})
export class SharedModule { }
