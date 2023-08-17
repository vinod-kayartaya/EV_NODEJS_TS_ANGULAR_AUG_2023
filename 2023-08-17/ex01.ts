let num: number;

num = 100;
console.log({ num });

// num = 'vinod'; // error - TS2322: Type 'string' is not assignable to type 'number'.

let firstname = 'Vinod'; // type inference
console.log({ firstname });

// firstname = 1234; // error TS2322: Type 'number' is not assignable to type 'string'.

for (let i: number = 1; i <= 5; i++) {
  console.log(`value of i is ${i}`);
}
