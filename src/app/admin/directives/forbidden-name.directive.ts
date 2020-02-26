import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators';

@Directive({
  selector: '[karForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }]
})
export class ForbiddenNameDirective implements Validator {
  @Input('karForbiddenName') forbiddenNames: string[];

  validate(control: AbstractControl): { [key: string]: any } | null {
    // return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
    return this.forbiddenNames ? CustomValidators.forbiddenNames(this.forbiddenNames)(control) : null;
  }
}
