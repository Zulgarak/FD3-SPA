import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
   private sideBarOpen = false;

  constructor() { }

  getSideBarOpen() {
    return this.sideBarOpen;
  }

  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
