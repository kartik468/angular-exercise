import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[karCustomMaxLength]'
})
export class CustomMaxLengthDirective implements OnInit, OnChanges {
  @Input('karCustomMaxLength') maxLength = 10;

  @HostBinding('class.invalid') invalid = false;

  @HostListener('input', ['$event']) onInputChange(event) {
    this.setValidity();
  }

  setValidity() {
    const value = this.el.nativeElement.value;
    this.invalid = value.length > this.maxLength ? true : false;
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setValidity();
  }

  ngOnChanges() {
    this.setValidity();
  }
}
