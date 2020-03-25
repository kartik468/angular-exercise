import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      providers: [
        {
          provide: AuthService,
          useValue: authServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should logout when logout button clicked', () => {
    const authServiceSpyObj = TestBed.inject(AuthService);
    const logoutSpy = authServiceSpyObj.logout as jasmine.Spy;

    authServiceSpyObj.isAuthenticated = true;
    fixture.detectChanges();

    const logoutBtnDe = fixture.debugElement.query(By.css('.logout-btn'));
    logoutBtnDe.nativeElement.click();

    expect(logoutSpy).toHaveBeenCalled();

    authServiceSpyObj.isAuthenticated = false;
    fixture.detectChanges();

    const logoutMsgDE = fixture.debugElement.query(By.css('.logout-msg'));
    expect(logoutMsgDE.nativeElement.textContent).toContain('User logged out successfully..');
  });
});
