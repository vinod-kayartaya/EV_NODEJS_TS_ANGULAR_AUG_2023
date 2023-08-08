let p1 = {};
console.log('type of p1 is', typeof p1);
console.log(p1);

p1.firstname = 'Vinod';
p1.lastname = 'Kumar';
p1.phones = [];
p1.phones.push('9731424784');
p1.address = { city: 'Bangalore', state: 'Karnataka' };
p1.age = 50;
p1.isMarried = true;

let p2 = p1; // two references to single object

let p3 = { ...p1, gender: 'Male' }; // spread operator; shallow copy
let p4 = JSON.parse(JSON.stringify(p1));

p2.phones.push('9844083934');
p2.age = 30;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
