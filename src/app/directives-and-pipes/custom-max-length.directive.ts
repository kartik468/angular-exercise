import { Directive, OnInit, Input, ElementRef, HostBinding, HostListener, OnChanges, AfterViewChecked, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[karCustomMaxLength]'
})
export class CustomMaxLengthDirective implements OnInit, OnChanges {
  value: string;

  @Input('karCustomMaxLength') maxLength: number;

  @Input() inputValue: string;

  @HostBinding('class.invalid') isInvalid: boolean;

  @HostListener('input') onInputValueChange() {
    this.value = this.elementRef.nativeElement.value;
    this.isInvalid = this.value.length > this.maxLength ? true : false;
  }

  constructor(private elementRef: ElementRef) {}

  ngOnChanges() {
    // console.log(this.inputValue);
  }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement.value);
    this.value = this.inputValue;
    // this.onInputValueChange();
    this.isInvalid = this.value.length > this.maxLength ? true : false;
  }
}
