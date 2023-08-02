function sayHello(name = 'friend', city = 'your city') {
  if (arguments.length > 2) {
    throw new Error('More than 2 arguments are not allowed!');
  }
  if (typeof name !== 'string' || typeof city !== 'string') {
    throw new Error('name and city must be strings');
  }
  //   console.log('user passed these arguments:', arguments);
  console.log(`Hello, ${name}! How's weather in ${city}?`);
}

sayHello();
sayHello('Vinod');
sayHello('Kumar', 'Bangalore');
sayHello(100, 20);
sayHello('Kumar', 'Bangalore', 1230);
