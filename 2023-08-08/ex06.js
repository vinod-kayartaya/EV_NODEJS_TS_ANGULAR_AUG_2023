let emps = [
  { id: 1122, name: 'Ramesh', salary: 34500 },
  { id: 7872, name: 'Kushal', salary: 47500 },
];

let emps1 = emps; // both are referencing to same array
let emps2 = [...emps]; // emps2 is a shallow copy of emps
// changes to individual employee data using one will be reflected in the other

let emps3 = JSON.parse(JSON.stringify(emps)); // deep copy, changes to an individual object of emps3
// will not be reflected in emps or emps1

emps2[1].salary += 500;
emps2.push({ id: 2934, name: 'Rohit', salary: 50000 });

emps3[0].salary += 1000;
emps3.push({ id: 7788, name: 'Jacob', salary: 25000 });

emps[0].name += ' Kumar';

console.log(emps);
console.log(emps1);
console.log(emps2);
console.log(emps3);
