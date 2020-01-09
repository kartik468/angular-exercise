import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {

  static forbiddenNames(names: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const forbidden = names.includes(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
}
