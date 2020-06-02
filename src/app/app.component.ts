import {Component, OnInit} from '@angular/core';
import {ToggleSidebarService} from './shared/services/toggle-sidebar/toggle-sidebar.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private toggleSidebarService: ToggleSidebarService,
              private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }

  getStateSidebar() {
    return this.toggleSidebarService.getSideBarOpen();
  }

}
