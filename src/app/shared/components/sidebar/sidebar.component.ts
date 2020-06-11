import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleSidebarService } from '../../services/toggle-sidebar/toggle-sidebar.service';
import { LoginUser } from '../../../auth/user';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  sideBarOpen = false;
  $user = this.authService.user;
  userEmail: string;
  userEmailSubscription: Subscription;

  constructor(private toggleSidebarService: ToggleSidebarService,
              private authService: AuthService) { }


  ngOnInit(): void {
    this.userEmailSubscription = this.authService.user
      .subscribe((user: LoginUser) => {
        if (!!user) {
          this.userEmail = user.email;
        }
      });
  }

  toggleSidebar() {
    this.toggleSidebarService.sideBarToggle();
  }

  onLogout() {
    this.authService.logout();
    this.toggleSidebarService.sideBarToggle();
  }

  ngOnDestroy(): void {
    this.userEmailSubscription.unsubscribe();
  }

}
