import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power',
})
export class PowerPipe implements PipeTransform {
  transform(n: number, p: number = 2): number {
    return Math.pow(n, p);
  }
}
