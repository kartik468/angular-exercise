import { UsPhone1Pipe } from './us-phone1.pipe';
import { Component, DebugElement, OnInit } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div>Test Host component</div>
    <div>original value: {{ phone }}</div>
    <div class="phone-number">{{ phone | usPhone1 }}</div>
    <input #myInput type="text" class="test-input" />
  `
})
class TestHostComponent implements OnInit {
  phone = '12345';

  ngOnInit() {}
}

describe('UsPhone1Pipe', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let componentDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, UsPhone1Pipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    componentDe = fixture.debugElement;
  });

  it('should create TestHostComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    // just checking to see how to reference template reference variables
    const references = componentDe.queryAll(de => de.references.myInput);
    console.log(references[0].nativeElement);
  });

  it('should show formatted text when valid value is provided', () => {
    fixture.detectChanges();
    const phoneDe = componentDe.query(By.css('.phone-number'));
    expect(phoneDe.nativeElement.textContent).toBe('12-345');
  });

  it('should show empty text when invalid value is provided', () => {
    component.phone = '123456';
    fixture.detectChanges();
    const phoneDe = componentDe.query(By.css('.phone-number'));
    expect(phoneDe.nativeElement.textContent).toBe('');
  });
});
