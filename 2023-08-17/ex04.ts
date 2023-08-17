class Person {
  firstname: string | undefined;
  lastname: string | undefined;

  constructor(firstname?: string | undefined, lastname?: string | undefined) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let p1: Person, p2: Person, p3: Person, p4: Person;

p1 = new Person();
p2 = new Person('Vinod', 'Kumar');
p3 = new Person('Ramesh');
p4 = new Person(undefined, 'Rao');
console.log({ p1, p2, p3, p4 });
