// object property shorthand

let firstname = 'Vinod';
let lastname = 'Kumar';
let city = 'Bangalore';

// let p1 = { firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore' };
// let p1 = { firstname: firstname, lastname: 'Kumar', city: 'Bangalore' };
let p1 = { firstname, lastname, city, email: 'vinod@vinod.co' };
console.log(p1);
