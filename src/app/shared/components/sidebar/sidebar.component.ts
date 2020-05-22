import { Component, OnInit } from '@angular/core';
import {UserActiveService} from '../../services/user-active/user-active.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarOpen = false;

  constructor(private userActiveService: UserActiveService) { }

  ngOnInit(): void {
  }

  getActive() {
    return this.userActiveService.userActive();
  }

  toggleActive() {
    this.userActiveService.toggleUserActive();
  }
  sideBarToggle(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
