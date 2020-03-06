import { Directive, OnInit, Input, ElementRef, HostBinding, HostListener, OnChanges, AfterViewChecked, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[karCustomMaxLength]'
})
export class CustomMaxLengthDirective implements OnInit {
  @Input('karCustomMaxLength') maxLength = 10;

  @HostBinding('class.invalid') invalid = false;

  @HostListener('input', ['$event']) onInputChange(event) {
    // const value = event.target.value;
    const value: string = this.el.nativeElement.value;
    console.log(value);
    this.setValidity(value);
  }

  setValidity(value) {
    this.invalid = value.length > this.maxLength ? true : false;
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const value: string = this.el.nativeElement.value;
    console.log(value);
    this.setValidity(value);
  }
}
