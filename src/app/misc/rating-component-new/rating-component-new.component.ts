import { Component, OnInit, forwardRef } from '@angular/core';

import * as _ from 'lodash';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'kar-rating-component-new',
  templateUrl: './rating-component-new.component.html',
  styleUrls: ['./rating-component-new.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponentNewComponent),
      multi: true
    }
  ]
})
export class RatingComponentNewComponent implements ControlValueAccessor {
  rating = 0;

  maxRating = 5;

  stars: boolean[];

  disabled = false;

  onChange: (rating: number) => {};

  onTouched: () => {};

  constructor() {}

  // ngOnInit() {
  //   this.setStarsArray();
  // }

  setStarsArray() {
    this.stars = _.fill(Array(this.maxRating), true, 0, this.rating);
  }

  onStarClick(starred: boolean, index: number) {
    if (!this.disabled) {
      let newRating: number;
      const starIndex = index + 1;
      if (!starred) {
        newRating = starIndex;
      } else {
        if (this.rating > starIndex) {
          newRating = starIndex;
        } else {
          newRating = starIndex - 1;
        }
      }
      this.rate(newRating);
    }
  }

  rate(rating: number) {
    this.rating = rating;
    this.setStarsArray();
    this.onChange(this.rating);
    this.onTouched();
  }

  writeValue(rating: number): void {
    if (!this.disabled) {
      console.log('writeValue', rating);
      this.rating = rating;
      this.setStarsArray();
    }
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched');
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    console.log('setDisabledState');
  }
}
