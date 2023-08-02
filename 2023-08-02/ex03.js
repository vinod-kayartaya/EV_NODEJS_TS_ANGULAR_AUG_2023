console.log('loading ex03 to vm...');
const mu = require('./math-utils');

console.log('mu is', mu);

const f1 = mu.factorial(7);
const f2 = mu.fibonacci(7);

console.log('factorial of 7 is %s', f1);
console.log('fibonacci element at index 7 is %s', f2);
