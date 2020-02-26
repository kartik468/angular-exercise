import { ForbiddenNameDirective } from './forbidden-name.directive';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule, FormControl, NgForm } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <form autocomplete="off" #tdUserForm="ngForm">
      <div class="form-row">
        <div class="form-group col-md-4">
          <label class="control-label" for="name">Name</label>
          <input
            type="text"
            name="name"
            class="form-control name"
            id="name"
            [(ngModel)]="tdFormUser.name"
            required
            [karForbiddenName]="['kartik']"
            #nameControl="ngModel"
          />
          <div *ngIf="nameControl.errors?.required" class="invalid-feedback">
            Name can not be empty.
          </div>
          <div *ngIf="nameControl.errors?.forbiddenName" class="invalid-feedback">
            Please choose different username.
          </div>
        </div>
      </div>
    </form>
  `
})
class TestComponent implements AfterViewInit {
  @ViewChild('tdUserForm') tdUserForm: NgForm;

  tdFormUser = {
    name: '',
    email: ''
  };

  ngAfterViewInit() {
    // console.log(this.tdUserForm);
  }
}

describe('ForbiddenNameDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, ForbiddenNameDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new ForbiddenNameDirective();
    expect(directive).toBeTruthy();
  });

  it('should validate forbiddenNames function', () => {
    expect(CustomValidators.forbiddenNames(['123'])(new FormControl('123'))).toBeTruthy();
    expect(CustomValidators.forbiddenNames(['123456789'])(new FormControl('123'))).toEqual(null);
  });

  it('should validate forbiddenName directive with correct input value', async(() => {
    const debug = fixture.debugElement;
    const inputDE = debug.query(By.css('#name'));
    fixture.detectChanges();
    console.log(component.tdUserForm);
    fixture.whenStable().then(() => {
      console.log(component.tdUserForm);
      const control = component.tdUserForm.controls.name;
      inputDE.nativeElement.value = 'kartik1';
      inputDE.nativeElement.dispatchEvent(new CustomEvent('input'));
      fixture.detectChanges();

      expect(control.valid).toBe(true);
    });
  }));

  it('should invalidate forbiddenName directive with wrong input value', async(() => {
    const debug = fixture.debugElement;
    const inputDE = debug.query(By.css('#name'));
    fixture.detectChanges();
    console.log(component.tdUserForm);
    fixture.whenStable().then(() => {
      console.log(component.tdUserForm);
      const control = component.tdUserForm.controls.name;
      inputDE.nativeElement.value = 'kartik';
      inputDE.nativeElement.dispatchEvent(new CustomEvent('input'));
      fixture.detectChanges();

      expect(control.valid).toBe(false);
    });
  }));
});
