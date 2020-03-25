import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { MessageService } from './message.service';

let messageServiceSpy: jasmine.SpyObj<MessageService>;
let authService: AuthService;
describe('AuthService', () => {
  messageServiceSpy = jasmine.createSpyObj('MessageService', ['pushMessage']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthService,
      {
        provide: MessageService, useValue: messageServiceSpy
      }
    ]
  }));

  beforeEach(() => {
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService);
    expect(service).toBeTruthy();
  });

  it('should call push message when logged in or logged out', () => {
    const msgServiceSpy = TestBed.inject(MessageService);
    const pushMessageSpy = (msgServiceSpy.pushMessage as jasmine.Spy).and.returnValue(undefined);
    authService.login();

    expect(msgServiceSpy.pushMessage).toHaveBeenCalled();
    const args = pushMessageSpy.calls.first().args[0];
    expect(args).toBe('user logged in', 'should have first arg "user logged in"');


    expect(pushMessageSpy.calls.mostRecent().returnValue).not.toBeDefined('should return nothing');

    authService.logout();
    expect(msgServiceSpy.pushMessage).toHaveBeenCalled();
  });

  it('should return true if isUserLoggedIn called and user is logged in', () => {
    authService.isAuthenticated = true;
    expect(authService.isUserLoggedIn()).toBe(true);
  });
});
