import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sideBarOpen = false;

  sideBarToggle(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
