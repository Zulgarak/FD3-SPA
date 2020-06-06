import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {loader} from '../shared/components/loader/loader.decorator';
import {Feedback} from '../shared/models/feedbacks.model';
import {Car} from '../shared/models/cars.model';


@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  private feedbacks: Feedback[] = [];
  // private feedbacksSubject = new BehaviorSubject<Feedback[]>([...this.feedbacks]);

  constructor(private router: Router,
              private http: HttpClient) { }

  // @loader()
  getFeedbacks(): Observable<Feedback[]> {
    return this.http.get(`${environment.api}/feedbacks.json`)
      .pipe(
        map((data) => {
          const feedbacks: Feedback[] = [];
          for (let key in data) {
            feedbacks.push({...data[key]});
          }
          this.feedbacks = feedbacks;
          return this.feedbacks;
        })
      );
  }

  addFeedback(feedback) {
    return this.http.post(`${environment.api}/feedbacks.json`, feedback)
      .pipe(
        tap((data) => {
          console.log(data);
          this.feedbacks.push({...feedback});
        })
      );
  }



}
