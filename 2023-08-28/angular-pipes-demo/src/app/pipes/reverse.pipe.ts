import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(input: string | number): string | null {
    if (typeof input === 'string') {
      if (input.trim().length === 0) return null;
    } else if (typeof input === 'number') {
      input = `${input}`;
    }

    let rev = '';
    for (let i = 0; i < input.length; i++) {
      rev = input.charAt(i) + rev;
    }
    return rev;
  }
}
