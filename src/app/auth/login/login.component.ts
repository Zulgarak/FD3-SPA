import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isHide() {
    this.hide = !this.hide;
    return false;
  }

  submit(form: NgForm) {
    this.authService.login(form.value.log_email, form.value.log_password)
      .subscribe(
        (data: AuthResponse) => {
        // console.log(data);
        form.resetForm();
        },
        (error) => {
        form.resetForm();
        }
      );
  }
}
