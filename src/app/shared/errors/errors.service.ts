import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomError } from './error.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private _error: CustomError = null;
  private _errorSubject: BehaviorSubject<CustomError> = new BehaviorSubject(this._error);
  private _errorTimer: any;

  get error() {
    return this._errorSubject;
  }

  showError(error: CustomError) {
    this._error = error;
    this._errorSubject.next(this._error);
    this._errorTimer = setTimeout(() => {
      this.hideError();
    }, 4000);
  }

  hideError() {
    this._errorSubject.next(null);
    this._error = null;
  }


}
