console.log('loading math-utils to vm...');

const factorial = (num) => {
  let f = 1;
  while (num) {
    f *= num--;
  }
  return f;
};

const fibonacci = (index) => {
  let a = -1,
    b = 1,
    c;
  for (let i = 0; i <= index; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

// module.exports is an empty object by default
// i.e, module.exports = {}
// we are adding two additional properties here
module.exports.factorial = factorial
module.exports.fibonacci = fibonacci
