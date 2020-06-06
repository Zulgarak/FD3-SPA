import {Component, Input, OnInit} from '@angular/core';
import {AuthResponse} from '../../auth/auth-response';
import {NgForm} from '@angular/forms';
import {FeedbacksService} from '../feedbacks.service';
import {AuthService} from '../../auth/auth.service';
import {LoginUser} from '../../auth/user';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  public user: LoginUser;


  constructor(private feedbacksService: FeedbacksService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe((data) => {
      this.user = data;
    });
    console.log(this.user);
  }


  submit(form: NgForm) {
    const date = new Date();
    this.feedbacksService.addFeedback({text: form.value.message.trim(), name: this.user.email, date})
      .subscribe((data: AuthResponse) => {
          console.log(data);
          form.resetForm();
        },
        (error) => {
          form.resetForm();
        }
      );
  }



}