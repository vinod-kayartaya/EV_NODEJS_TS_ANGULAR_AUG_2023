import people from './people.js';

// get only male data
const malePeople = people.filter((p) => p.gender === 'Male');
//console.log(malePeople);

const nums = [12, 34, 192, 911, 84, 885, 32, 390, 492, 283, 585, 334, 224];

const oddDoubles = nums.filter((n) => n % 2).map((n) => n * 2);
console.log(oddDoubles);

const squares = nums.map((n) => n * n);
console.log(squares);

const squareRoots = nums.map(Math.sqrt); // method reference, same as nums.map(n=>Math.sqrt(n))
console.log(squareRoots);

const fullNames = people.map(
  (p) => `${p.gender === 'Male' ? 'Mr.' : 'Ms.'}${p.first_name} ${p.last_name}`
);
console.log(fullNames);
