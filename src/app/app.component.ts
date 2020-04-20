import {Component, OnInit} from '@angular/core';
import {ToggleSidebarService} from './shared/services/toggle-sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit() {

  }

  getStateSidebar() {
    return this.toggleSidebarService.getSideBarOpen();
  }

}
