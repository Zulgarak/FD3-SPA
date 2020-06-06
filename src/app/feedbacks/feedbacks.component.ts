import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Feedback} from '../shared/models/feedbacks.model';
import {FeedbacksService} from './feedbacks.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit{
  public feedbacks: Feedback[];
  private feedbacksSUbscription: Subscription;

  constructor(private feedbacksService: FeedbacksService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.feedbacksSUbscription = this.feedbacksService.getFeedbacks()
    //   .subscribe((data) => {
    //     // console.log(data);
    //   });

    this.activatedRoute.data.subscribe((data) => {
      console.log(data[0]);
      // console.log(data[0]);
      this.feedbacks = data[0];
      console.log(this.feedbacks);
    });
    }

  // addFeedback() {
  //   console.log('added');
  //   const date =  new Date();
  //   this.feedbacksService.addFeedback({text: 'simple text', name: 'test@test.by', date})
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  //   console.log(this.feedbacks);
  // }


}
