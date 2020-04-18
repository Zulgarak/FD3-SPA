import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HideMobileDirective} from './directives/hide-mobile.directive';
import { BreakpoinObserverDirective } from './directives/breakpoin-observer.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HideMobileDirective,
    BreakpoinObserverDirective,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HideMobileDirective,
    BreakpoinObserverDirective,
  ],
})
export class SharedModule { }
