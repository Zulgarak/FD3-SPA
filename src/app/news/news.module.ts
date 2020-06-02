import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {NewsListComponent} from './news-list/news-list.component';
import {NewsItemComponent} from './news-list/news-item/news-item.component';




@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // CarsRoutingModule,
    SharedModule
  ],
  declarations: [
    NewsListComponent,
    NewsItemComponent,
  ]
})
export class NewsModule {

}
