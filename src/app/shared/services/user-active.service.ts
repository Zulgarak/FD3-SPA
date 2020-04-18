import { Injectable } from '@angular/core';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class UserActiveService {
//просто имитация. меняет в хэдере навигацию юзера
  private userIsActive = false;

  constructor() { }

  userActive() {
    return this.userIsActive;
  }

  toggleUserActive() {
    this.userIsActive = !this.userIsActive;
  }
}
