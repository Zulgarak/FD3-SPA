import { Component, OnInit } from '@angular/core';
import { ToggleSidebarService } from '../../services/toggle-sidebar/toggle-sidebar.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  $user = this.authService.user;
  constructor(private toggleSidebarService: ToggleSidebarService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarService.sideBarToggle();
  }

  onLogout() {
    this.authService.logout();
  }

}
