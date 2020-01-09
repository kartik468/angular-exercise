import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usPhone1'
})
export class UsPhone1Pipe implements PipeTransform {

  phoneRegex = /^(\d{2})(\d{3})$/;

  transform(value: string, ...args: any[]): string {
    if (this.phoneRegex.test(value)) {
      // console.log(value.match(this.phoneRegex));
      return value.replace(this.phoneRegex, '$1-$2');
    } else {
      return '';
    }
  }
}
