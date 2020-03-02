import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'kar-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  onLogoutClick() {
    this.auth.logout();
  }
}
