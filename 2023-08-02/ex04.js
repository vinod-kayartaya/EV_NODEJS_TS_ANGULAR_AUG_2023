'use strict';

const os = require('os'); // with out './' it will be treated as a core module (or locally installed module)

const cpus = os.cpus();
console.log('my laptop has %d cpus', cpus.length);

let cpu = cpus[0];
console.log('Speed = %s MHz, %s)', cpu.speed.toString(), cpu.model);

{
  let a = 100;
  console.log('inside the block, a is', a);
}

console.log('outside the block, a is', a);
