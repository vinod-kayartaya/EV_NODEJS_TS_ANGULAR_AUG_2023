sayHello();
function sayHello() {
  console.log('Hello, world');
}

var greet = function () {
  console.log('Good morning all');
};
greet();

var welcome = () => console.log('Welcome to Node training');
welcome();

var cube = (n) => {
  console.log('got n as', n);
  return n * n * n;
};

// var cube = function (n) {
//   return n * n * n;
// };
console.log('cube of 5 is', cube(5));
