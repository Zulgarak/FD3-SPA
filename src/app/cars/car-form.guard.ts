import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanComponentDeactivate } from '../shared/models/can-component-deactivate.model';

@Injectable({
  providedIn: 'root'
})
export class CarFormGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor() {}
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate && component.canDeactivate();
  }
}
