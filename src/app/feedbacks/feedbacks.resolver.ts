import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
import {FeedbacksService} from './feedbacks.service';
import {Feedback} from '../shared/models/feedbacks.model';
import {take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class FeedbacksResolver implements Resolve<Feedback[]> {
  constructor(private feedbacksService: FeedbacksService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Feedback[]> {
    // return this.feedbacksService.getFeedbacks();
    return this.feedbacksService.get().pipe(
      take(1)
    );
  }
}
