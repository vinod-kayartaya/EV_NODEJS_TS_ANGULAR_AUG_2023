import { LogExecutionTime } from './my-custom-decorators';

class MathOperations {
  @LogExecutionTime
  veryLongRunningOperation() {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }

  @LogExecutionTime
  factorial(num: number) {
    let f = 1;
    for (let i = 1; i <= num; i++) {
      f *= i;
    }
    return f;
  }
}

let mo: MathOperations;
mo = new MathOperations();
let s = mo.veryLongRunningOperation();
console.log(`sum is ${s}`);

let f = mo.factorial(10);
console.log(`factorial of 10 is ${f}`);
