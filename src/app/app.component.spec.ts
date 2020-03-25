import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WithoutInjectableService } from './services/without-injectable.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let appDE: DebugElement;
  let withoutInjectableServiceSpy: jasmine.SpyObj<WithoutInjectableService>;

  withoutInjectableServiceSpy = jasmine.createSpyObj('WithoutInjectableService', ['getData']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: WithoutInjectableService,
          useValue: withoutInjectableServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    appDE = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App Component'`, () => {
    expect(app.title).toEqual('App Component');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const appTitleDE = appDE.query(By.css('.app-title'));
    expect(appTitleDE.nativeElement.textContent).toBe('App Component');
  });

  it('should update the title', () => {
    const updatedTitle = 'Updated title';
    app.title = updatedTitle;
    fixture.detectChanges();
    const appTitleDE = appDE.query(By.css('.app-title'));
    expect(appTitleDE.nativeElement.textContent).toBe(updatedTitle);
  });

  it('should initially render inputString1 value to "initial value 1"', () => {
    fixture.detectChanges();
    const inputString1DE = appDE.query(By.css('.app-input-string1'));
    expect(inputString1DE.nativeElement.textContent).toContain(app.inputString1);
  });

  it('should update and render inputString1 value after some timeout to "inputString1', async(() => {
    fixture.detectChanges();
    // tick(4000);
    fixture.whenStable().then(() => {
      expect(app.inputString1).toBe('inputString1 after timeout', 'should update inputString1 property');
      fixture.detectChanges();
      const inputString1DE = appDE.query(By.css('.app-input-string1'));
      expect(inputString1DE.nativeElement.textContent).toContain(
        'inputString1 after timeout',
        'should render updated inputString1 property'
      );
    });
  }));
});
