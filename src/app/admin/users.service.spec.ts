import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from 'src/testing/USERS';

describe('UsersService', () => {
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let usersService: UsersService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    })
  );

  beforeEach(() => {
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    const service: UsersService = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    usersService.getUsers().subscribe(users => {
      expect(users).toEqual(USERS);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

    req.flush(USERS);
  });

  it('should get user', () => {
    usersService.getUser(1).subscribe(user => {
      expect(user).toEqual(USERS[0]);
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/1');

    req.flush(USERS[0]);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
