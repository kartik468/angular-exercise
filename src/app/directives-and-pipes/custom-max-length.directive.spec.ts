import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { CustomMaxLengthDirective } from './custom-max-length.directive';
import { Component, OnInit, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <h4>custom attribute directive show red border if length greater than 10</h4>
    <input type="text" class="firstName" [value]="firstName" [karCustomMaxLength]="10" />
  `
})
class TestHostComponent implements OnInit {
  firstName = 'John';

  ngOnInit() {}
}

describe('CustomMaxLengthDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let componentDE: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMaxLengthDirective, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    componentDE = fixture.debugElement;
  });

  it('should create TestHostComponent', () => {
    expect(component).toBeDefined();
  });

  it('should display initial value for firstName', () => {
    fixture.detectChanges();
    const inputDE = componentDE.query(By.css('input'));

    expect(inputDE.nativeElement.value).toBe(component.firstName);
  });

  it('input should have invalid class when value exceeds 10', async(() => {
    fixture.detectChanges();
    const inputDE = componentDE.query(By.css('input'));

    inputDE.nativeElement.value = '0123456789abc';
    inputDE.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputDE.nativeElement.classList.contains('invalid')).toBe(true);
  }));
});
