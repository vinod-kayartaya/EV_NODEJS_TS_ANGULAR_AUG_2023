let names = ['Vinod', 'Shyam', 'Harish', 'Ramesh', 'Rohit', 'Kiran'];

let name1 = names[0]; // Vinod
let name2 = names[1]; // Shyam

console.log(`name1 is ${name1} and name2 is ${name2}`);

let [n1, n2, n3, ...n4] = names; // array destructuring
console.log(`n1 is ${n1} and n2 is ${n2} and n3 is ${n3}`);
console.log('n4 is', n4);

let names1 = names; // two references to a single array object
// changes using `names1` will be reflected in `names`

names1.push('Kishore');

console.log('names1 is', names1);
console.log('names is', names);

let names2 = ['Jones', ...names, 'James']; // shallow copy, by spreading the content of `names` into a new array
names2.push('Pranav');
console.log('names2 is', names2);
console.log('names is', names);
