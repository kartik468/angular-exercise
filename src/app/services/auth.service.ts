import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private messageService: MessageService) {}

  isUserLoggedIn() {
    return this.isAuthenticated;
  }

  login() {
    this.isAuthenticated = true;
    this.messageService.pushMessage('user logged in');
  }

  logout() {
    this.isAuthenticated = false;
    this.messageService.pushMessage('user logged out');
  }
}
