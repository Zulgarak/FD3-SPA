import {Component, OnInit} from '@angular/core';
import {ToggleSidebarService} from '../../services/toggle-sidebar/toggle-sidebar.service';
import {AuthService} from '../../../auth/auth.service';
import {LoginUser} from '../../../auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private toggleSidebarService: ToggleSidebarService,
              private authService: AuthService) { }

  $user = this.authService.user;
  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toggleSidebarService.sideBarToggle();
    // setTimeout(()=> {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);
  }

}
