import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserActiveService} from '../../services/user-active/user-active.service';
import {ToggleSidebarService} from '../../services/toggle-sidebar/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private userActiveService: UserActiveService,
              private toggleSidebarService: ToggleSidebarService) { }

  ngOnInit(): void {}
  //с сервисами ещё попрактиковаться
  toggleActive() {
    this.userActiveService.toggleUserActive();
  }
  getActive() {
    return this.userActiveService.userActive();
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
