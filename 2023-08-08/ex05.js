import people from '../2023-08-04/people.js';

// console.log(people);

let arr = [...people]; // arr contains 10 references where each reference refers to objects from the original array

arr.splice(4, 3); // delete 3 person objects from index 4

console.log('people.length', people.length);
console.log('arr.length', arr.length);

people[1].first_name = 'Vinod'
people[1].last_name = 'Kumar'
people[1].gender = 'Male'

console.log(people[1]);
console.log(arr[1]);