import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord',
})
export class FirstWordPipe implements PipeTransform {
  transform(sentence: string): string {
    const index = sentence.indexOf(' ');
    if (index === -1) return sentence;
    return sentence.substring(0, index);
  }
}
