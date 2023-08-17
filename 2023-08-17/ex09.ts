class Person {
  constructor(
    private firstname: string | undefined,
    private lastname: string | undefined
  ) {}

  print() {
    console.log('Firstname: ' + this.firstname);
    console.log('Lastname : ' + this.lastname);
  }
}

class Employee extends Person {
  constructor(
    private id: number | undefined,
    firstname: string | undefined,
    lastname: string | undefined,
    private salary: number | undefined
  ) {
    super(firstname, lastname);
  }

  // override the method from super class
  print() {
    console.log('Id       : ' + this.id);
    super.print();
    console.log('Salary   : ₹' + this.salary);
  }
}

let e1 = new Employee(1122, 'Vishal', 'Khanna', 45000);
e1.print();

let p1: Person;

p1 = e1;
p1.print();

let e2: Employee;

e2 = p1 as Employee;
e2.print();
