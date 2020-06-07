import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {exhaustMap, map, skip, take, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {loader} from '../shared/components/loader/loader.decorator';
import {Feedback} from '../shared/models/feedbacks.model';
import {Car} from '../shared/models/cars.model';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  private skipValue = 0;
  // private feedbacks: Feedback[] = [];
  public feedbacks$ = new BehaviorSubject<Feedback[]>( null);
  // private feedbacksSubject = new BehaviorSubject<Feedback[]>([...this.feedbacks]);

  constructor(private router: Router,
              private http: HttpClient,
              private angularFirestore: AngularFirestore) { }


  getFeedbacks() {
    console.log('sd');
  }

  // @loader()
  // getFeedbacks(limit?: string): Observable<Feedback[]> {
  //   let params = new HttpParams();
  //   if (limit) {
  //     params = params.set('orderBy', '"title"');
  //     params = params.set('limitToFirst', limit);
  //   }
  //   return this.http.get(`${environment.api}/feedbacks.json`, {params})
  //     .pipe(
  //       map((data) => {
  //         const feedbacks: Feedback[] = [];
  //         for (let key in data) {
  //           feedbacks.push({...data[key]});
  //         }
  //         this.feedbacks = feedbacks;
  //         return this.feedbacks;
  //       })
  //     );
  // }

  // addFeedback(feedback) {
  //   return this.http.post(`${environment.api}/feedbacks.json`, feedback)
  //     .pipe(
  //       tap((data) => {
  //         console.log(data);
  //         this.feedbacks.push({...feedback});
  //       })
  //     );
  // }


  getItems() {
    return this.angularFirestore.collection('feedbacks',ref => ref
      .orderBy('timestamp', 'desc'))
      .snapshotChanges().pipe(
      map(changes => {
        // console.log(changes);
        return changes.map( x => {
          const data = x.payload.doc.data() as any;
          // console.log(data);
          data.id = x.payload.doc.id;
          // console.log(data);
          return data;
        });
      })
      //далее с сортировкой
    );
  }


  get() {
    return this.getItems().pipe(
      skip(this.skipValue),
      map(items => {
        // items =  items.sort((a, b) => b.date - a.date);
        // console.log(items);
        this.addToStream(items);
        return items;
      })
    );
  }
  addItem(text, name) {
    this.angularFirestore.collection('feedbacks').add(
      {
        id: this.angularFirestore.createId(),
        text: text,
        name: name,
        timestamp: new Date().getTime()
      }
    );
    this.skipValue = 1;
    return this.get();
  }

  private addToStream(items) {
    this.feedbacks$.next(items);
  }



}
