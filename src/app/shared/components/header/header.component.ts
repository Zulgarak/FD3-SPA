import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserActiveService} from '../../services/user-active.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarEvent: EventEmitter<any> = new EventEmitter();

  constructor(private userActiveService: UserActiveService) { }

  ngOnInit(): void {}
  //с сервисами ещё попрактиковаться
  toggleActive() {
    this.userActiveService.toggleUserActive();
  }
  getActive() {
    return this.userActiveService.userActive();
  }




  toggleSidebar() {
    this.toggleSidebarEvent.emit();
    // setTimeout(()=> {
    //   window.dispatchEvent(
    //     new Event('resize')
    //   );
    // }, 300);
  }

}
