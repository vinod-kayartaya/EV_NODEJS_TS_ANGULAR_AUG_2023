class Person {
  firstname!: string;
  lastname!: string;
  email!: string;
  phone!: string;
}

class Employee extends Person {
  id!: number;
  salary!: number;
  department!: string;
}

class Student extends Person {
  rollno!: number;
  gpa!: number;
}

let e1 = new Employee();
let s1 = new Student();

e1.id = 1122;
e1.firstname = 'Ramesh';
e1.lastname = 'Iyer';
e1.salary = 30000;
e1.department = 'ACCOUNTING';
e1.email = 'ramesh.iyer@xmpl.com';

s1.rollno = 2222;
s1.firstname = 'Uday';
s1.lastname = 'Kumar';
s1.gpa = 4.8;
s1.email = 'uday.kymar@xmpl.com';

console.log(e1);
console.log(s1);

console.log(e1 instanceof Person)
console.log(s1 instanceof Person)