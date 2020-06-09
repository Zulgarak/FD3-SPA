import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //сделать реактивной +валидатор
  hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  isHide() {
    this.hide = !this.hide;
    return false;
  }

  submit(form: NgForm) {
    // console.log(form.value);
    this.authService.signUp(form.value.reg_email, form.value.reg_password)
      .subscribe(
        (data: AuthResponse) => {
          form.resetForm();
        },
          (error) => {
          form.resetForm();
        }
      );
  }
}
