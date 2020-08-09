import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { defer } from 'rxjs';
import { USERS } from 'src/testing/USERS';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async(() => {
    usersServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: UsersService,
          useValue: usersServiceSpy
        },
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteStub({ id: 2 })
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch users', () => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUsersSpy = usersServiceSpyObj.getUsers as jasmine.Spy;

    getUsersSpy.and.returnValue(defer(() => Promise.resolve(USERS)));
    fixture.detectChanges();

    expect(getUsersSpy).toHaveBeenCalled();
  });

  it('should display 10 users initially', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUsersSpy = usersServiceSpyObj.getUsers as jasmine.Spy;

    getUsersSpy.and.returnValue(defer(() => Promise.resolve(USERS)));
    fixture.detectChanges();

    tick();
    // fixture.whenStable().then(() => {
    expect(component.users).toBe(USERS, 'expect users property set with USERS');
    fixture.detectChanges();

    const usersDE = fixture.debugElement.queryAll(By.css('.user'));
    expect(usersDE.length).toBe(10, 'should display 10 users');
    // });
  }));

  it('should set selectedUserId to 2', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUsersSpy = usersServiceSpyObj.getUsers as jasmine.Spy;

    getUsersSpy.and.returnValue(defer(() => Promise.resolve(USERS)));
    fixture.detectChanges();

    // tick();
    // fixture.whenStable().then(() => {
    expect(component.selectedUserId).toBe(2);
    // });
  }));

  it('should navigate to user when one of the user link is clicked', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUsersSpy = usersServiceSpyObj.getUsers as jasmine.Spy;

    getUsersSpy.and.returnValue(defer(() => Promise.resolve(USERS)));
    fixture.detectChanges();

    tick();
    fixture.detectChanges();
    const usersDE = fixture.debugElement.queryAll(By.css('.user-link'));
    usersDE[1].nativeElement.click();

    const routerSpyObj = TestBed.inject(Router);
    const navigateSpy = routerSpyObj.navigate as jasmine.Spy;

    expect(navigateSpy).toHaveBeenCalled();
    const args = navigateSpy.calls.mostRecent().args;
    expect(args[0]).toContain(2);
  }));
});
