import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map, skip } from 'rxjs/operators';
import { Feedback } from '../shared/models/feedbacks.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {
  private skipValue = 0;
  public feedbacks$ = new BehaviorSubject<Feedback[]>( null);

  constructor(private router: Router,
              private http: HttpClient,
              private angularFirestore: AngularFirestore) { }


  getItems() {
    return this.angularFirestore.collection('feedbacks',ref => ref
      .orderBy('timestamp', 'desc'))
      .snapshotChanges().pipe(
      map(changes => {
        return changes.map( x => {
          const data = x.payload.doc.data() as any;
          data.id = x.payload.doc.id;
          return data;
        });
      })
    );
  }

  get() {
    return this.getItems().pipe(
      skip(this.skipValue),
      map(items => {
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
