import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usPhone'
})
export class UsPhonePipe implements PipeTransform {
  regex = /^(\d{2})(\d{2})$/;
  regex1 = /^(?<first>\d{2})(?<second>\d{2})$/;

  transform(value: string, ...args: any[]): string {
    // console.log(value);
    // console.log(this.regex.test(value));
    // console.log(value.match(this.regex));
    const matches = value.match(this.regex1);
    // console.log(matches);
    // console.log(value.replace(this.regex1, '$<first>-$2'));
    const transformedValue = value.replace(this.regex, '$1-$2');
    console.log(transformedValue);

    return transformedValue;
  }
}
