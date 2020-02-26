import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  pushMessage(msg: string) {
    this.messages.push(msg);
  }

  clearMessages() {
    this.messages.length = 0;
  }
}
