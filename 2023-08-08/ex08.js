let nums = [10, 22, 394, 59, 2893, 55];
let p1 = { firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore' };

function fn1(n1, n2, ...n3) {
  // ... is called rest operator in this context
  console.log('arguments.length is', arguments.length);
  console.log('n1 is', n1);
  console.log('n2 is', n2);
  console.log('n3 is', n3);
}

function fn2({ firstname, city, state = 'Karnataka' }) {
  // object destructuring
  console.log(`${firstname} lives in ${city} of ${state} state`);
}

// fn1(nums);
fn1(...nums); // ... is called spread operator in this context
fn2(p1);

let { firstname, city, email } = p1; // create 3 new local variables called `firstname`, `city` and `email`, whose values come from p1. If such a property doesn't exist in p1, then it becomes undefined
// same as `let firstname = p1.firstname` and `let city = p1.city`
console.log(`firstname is ${firstname}, city is ${city} and email is ${email}`);
