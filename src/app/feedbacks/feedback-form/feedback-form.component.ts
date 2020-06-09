import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbacksService } from '../feedbacks.service';
import { AuthService } from '../../auth/auth.service';
import { LoginUser } from '../../auth/user';


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
  }

  submit(form: NgForm) {
    this.feedbacksService.addItem(form.value.message.trim(), this.user.email)
      .subscribe((data) => {
          form.resetForm();
        },
        (error) => {
          form.resetForm();
        }
      );
  }
}
