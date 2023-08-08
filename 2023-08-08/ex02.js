import people from '../2023-08-04/people.js';

let index = people.findIndex((p) => p.first_name === 'Townsend');
console.log(`The index of person with first name of "Townsend" is ${index}`);
console.log(people[index]);

let p1 = people.find((p) => p.first_name === 'Karole');
console.log(p1);
