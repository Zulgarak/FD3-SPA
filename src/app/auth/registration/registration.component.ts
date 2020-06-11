import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthResponse } from '../auth-response';
import {CustomValidators} from '../../shared/validators/user-email-validator';
import {log} from 'util';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup;
  public passwordGroup: FormGroup;

  hide = true;
  hideRepeat = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
    this.passwordGroup = this.form.controls.passwordGroup as FormGroup;

  }

  isHide() {
    this.hide = !this.hide;
    return false;
  }

  isHideRepeat() {
    this.hideRepeat = !this.hideRepeat;
    return false;
  }

  submit(form) {
    this.authService.signUp(form.value.email, form.value.passwordGroup.reg_password)
      .subscribe(
        (data: AuthResponse) => {
          // form.resetForm();
        },
          (error) => {
          // form.resetForm();
        }
      );
  }

  private initForm() {
    this.form = new FormGroup({
      email: new FormControl('',
        {
          validators: [Validators.required, Validators.email],
        }),
      passwordGroup: new FormGroup({
        reg_password: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
        repeat_reg_password: new FormControl('', [
          Validators.required,
          Validators.minLength(7)
        ])
      }, CustomValidators.passwordEqual('reg_password', 'repeat_reg_password')),
    });
  }
}
