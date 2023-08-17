class Person {
  constructor(
    private firstname?: string | undefined,
    private lastname?: string | undefined
  ) {}

  // the 'get' keyword makes this function as a readable variable
  // must return a value
  // must be a no-arg method
  get fullname(): string {
    return `${this.firstname || ''} ${this.lastname || ''}`;
  }

  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }
  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  print(): void {
    console.log(
      `firstname is ${this.firstname} and lastname is ${this.lastname}`
    );
  }
}

let p1: Person, p2: Person, p3: Person, p4: Person;

p1 = new Person();
p2 = new Person('Vinod', 'Kumar');
p3 = new Person('Ramesh');
p4 = new Person(undefined, 'Rao');
console.log({ p1, p2, p3, p4 });
p1.print();
p2.print();
p3.print();
p4.print();

p3.setLastname('Iyer');
p4.setFirstname('Venugopal');

console.log('p1.fullname', p1.fullname);
console.log('p2.fullname', p2.fullname);
console.log('p3.fullname', p3.fullname);
console.log('p4.fullname', p4.fullname);
