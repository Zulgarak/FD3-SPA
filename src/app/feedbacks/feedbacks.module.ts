import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {FeedbacksComponent} from './feedbacks.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';
import {FeedbacksRoutingModule} from './feedbacks-routing.module';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeedbacksRoutingModule,
    SharedModule
  ],
  declarations: [
    FeedbacksComponent,
    FeedbackComponent,
    FeedbackFormComponent
  ]
})
export class FeedbacksModule { }
