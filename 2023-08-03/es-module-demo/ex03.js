console.log('starting ex03.js execution...');

function execInFuture(fn, duration) {
  delay(duration);
  fn();
}

function delay(duration) {
  let startTime = Date.now(); // current time in milliseconds
  while (Date.now() - startTime <= duration);
}

function welcome() {
  console.log('Welcome to nodejs learning...');
}

setTimeout(welcome, 3000);
// execInFuture(welcome, 3000);

console.log('end of ex03 reached!');
