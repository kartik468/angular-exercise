import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { UsersService } from '../../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { User } from '../../models/user';
import { defer } from 'rxjs';
import { By } from '@angular/platform-browser';
import { USERS } from 'src/testing/USERS';

const secondUser: User = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    geo: {
      lat: '-43.9509',
      lng: '-34.4618'
    }
  },
  phone: '010-692-6593 x09125',
  website: 'anastasia.net',
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains'
  }
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  let usersServiceSpy: jasmine.SpyObj<UsersService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async(() => {
    usersServiceSpy = jasmine.createSpyObj('UsersService', ['getUser']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [UserComponent],
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
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    // fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set userId property to 2', () => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;

    getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    expect(component.userId).toBe(2);
  });

  it('should set user property to "secondUser"', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;

    getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    expect(component.user).toBe(secondUser);
  }));

  it('should display username in title', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;

    getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const titleDE = fixture.debugElement.query(By.css('.user-name-title'));
    expect(titleDE.nativeElement.textContent).toContain(secondUser.name);
  }));

  it('should use cached users when exists', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    // const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;
    usersServiceSpyObj.users = USERS;
    // getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const titleDE = fixture.debugElement.query(By.css('.user-name-title'));
    expect(titleDE.nativeElement.textContent).toContain(secondUser.name);
  }));

  it('user form should be valid initially', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    // const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;
    usersServiceSpyObj.users = USERS;
    // getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.userForm.valid).toBe(true);
  }));

  it('user form should be invalid when user name made empty', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    // const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;
    usersServiceSpyObj.users = USERS;
    // getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    component.userForm.get('name').setValue('');
    expect(component.userForm.valid).toBe(false);
  }));

  it('user form should add hobby when addHobby button is clicked', fakeAsync(() => {
    const usersServiceSpyObj = TestBed.inject(UsersService);
    // const getUserSpy = usersServiceSpyObj.getUser as jasmine.Spy;
    usersServiceSpyObj.users = USERS;
    // getUserSpy.and.returnValue(defer(() => Promise.resolve(secondUser)));
    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    const hobbiesControls = (component.userForm.get('hobbies') as FormArray).controls;

    const existingHobbies = hobbiesControls.length;

    const addHobbyDE = fixture.debugElement.query(By.css('.add-hobby'));
    addHobbyDE.nativeElement.click();

    expect(hobbiesControls.length).toBeGreaterThan(existingHobbies);
  }));

  it('should navigate to users when back button is clicked', () => {
    const backButtonDE = fixture.debugElement.query(By.css('.back-button'));
    backButtonDE.nativeElement.click();

    const routerSpyObj = TestBed.inject(Router);
    const navigateSpy = routerSpyObj.navigate as jasmine.Spy;
    expect(navigateSpy).toHaveBeenCalled();
  });
});
