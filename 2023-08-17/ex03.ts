class Person {
  firstname: string | undefined;
  lastname: string | undefined;
  city: string | undefined = 'Bangalore';

  constructor() {
    console.log('Person instantiated!');
  }
}

let p1: Person, p2: Person;

p1 = new Person();
p1.firstname = 'Vinod';
p1.lastname = 'Kumar';
// p1.email = 'vinod@vinod.co'; // allowed in JS, not allowed in TS

p2 = new Person();

console.log({ p1, p2 });
