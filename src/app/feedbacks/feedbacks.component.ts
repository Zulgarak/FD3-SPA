import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {Feedback} from '../shared/models/feedbacks.model';
import {FeedbacksService} from './feedbacks.service';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {environment} from '../../environments/environment';
import {map, skip, subscribeOn} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginUser} from '../auth/user';
import {AuthService} from '../auth/auth.service';
import {AngularFireDatabase} from '@angular/fire/database';




@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit, OnDestroy {
  private feedbacksSubscription: Subscription;
  private userSubscription: Subscription;
  user: LoginUser;
  feedbacksCurrent: Observable<Feedback[]>;
  feedbacks: Observable<Feedback[]>;
  length = 5;
  pageSize = 5;
  lowValue = 0;


  constructor(private feedbacksService: FeedbacksService,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private angularFirestore: AngularFirestore,
              private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.getUser().subscribe((data) => {
      this.user = data;
    });

    this.feedbacksSubscription = this.feedbacksService.feedbacks$.subscribe((item) => {
      this.length = (item) ? item.length : 0;
      this.feedbacks = of((item) ? item : []);
      this.feedCurrentChange(this.lowValue);
    });
  }

  pageChange(event): void {
    this.lowValue = event.pageIndex * event.pageSize;
    this.feedCurrentChange(this.lowValue);

  }

  feedCurrentChange(low: number, step: number = this.pageSize): void {
    this.feedbacksCurrent = this.feedbacks.pipe(
      map(items => {
        return items.slice(low , low + step);
      })
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.feedbacksSubscription.unsubscribe();
  }

}
